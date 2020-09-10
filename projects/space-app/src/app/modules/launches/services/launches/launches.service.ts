import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Launch } from '@shared/types';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { API_URL } from '../../../../api-url';
import { LaunchesQueryParams } from '../../types/launches-query-params';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private readonly defaultQueryParams: LaunchesQueryParams = {sort: 'id', order: 'ASC', query: ''};
  private queryParams = new BehaviorSubject<LaunchesQueryParams>(this.defaultQueryParams);

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getLaunches(): Observable<Launch[]> {
    return this.queryParams
      .pipe(
        map(({sort, order, query}) => ({_sort: sort.toString(), _order: order, q: query})),
        switchMap(params => this.http.get<Launch[]>(`${this.apiUrl}/launches`, {params}))
      )
  }

  getQueryParams(): Observable<LaunchesQueryParams> {
    return this.queryParams.asObservable();
  }

  updateQueryParams(queryParams: LaunchesQueryParams): void {
    this.queryParams.next(queryParams);
  }

  resetQueryParams(): void {
    this.queryParams.next(this.defaultQueryParams);
  }
}
