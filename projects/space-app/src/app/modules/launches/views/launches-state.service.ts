import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, startWith, Subject, switchMap } from 'rxjs';
import { LaunchesService } from 'space-api/services';
import { Launch, LaunchDetailsUpdate, LaunchesQueryParams } from 'space-api/types';

@Injectable({
  providedIn: 'root'
})
export class LaunchesStateService {

  constructor(private launchesService: LaunchesService, private router: Router, private route: ActivatedRoute) { }

  queryParams = this.route.queryParams as Observable<LaunchesQueryParams>;
  refresh = new Subject<void>();

  launches: Observable<Launch[]> = combineLatest([
    this.queryParams,
    this.refresh.pipe(startWith(undefined))
  ]).pipe(
    switchMap(([queryParams]) => this.launchesService.getLaunches(queryParams)),
  );

  searchLaunches(params: Partial<LaunchesQueryParams>): void {
    this.router.navigate(['.'], {queryParams: params, relativeTo: this.route});
  }

  refreshLaunches(): void {
    this.refresh.next();
  }

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate): void {
    this.launchesService.updateDetails(detailsUpdate).subscribe(
      () => this.refreshLaunches()
    );
  }
}
