import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { API_URL } from '../../tokens';
import { Moon } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class MoonsService {
  private moons = this.http.get<Moon[]>(`${this.apiUrl}/moons`)
    .pipe(
      shareReplay(1)
    );

  constructor(private http: HttpClient, @Inject(API_URL) private apiUrl: string) {}

  getMoons(): Observable<Moon[]> {
    return this.moons;
  }

  getMoon(id: number): Observable<Moon> {
    return this.getMoons()
      .pipe(
        map(moons => moons.find(moon => moon.id === id))
      );
  }
}
