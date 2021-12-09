import { Component, OnInit } from '@angular/core';
import { LaunchesService } from 'space-api/services';
import { LaunchDetailsUpdate, LaunchesQueryParams } from 'space-api/types';
import { LaunchesStateService } from '../launches-state.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
  providers: [LaunchesStateService]
})
export class LaunchesComponent implements OnInit {
  queryParams = this.launchesState.queryParams;
  launches = this.launchesState.launches;

  constructor(private launchesState: LaunchesStateService) { }

  ngOnInit(): void {
  }

  searchLaunches(params: LaunchesQueryParams): void {
    this.launchesState.searchLaunches(params);
  }

  updateLaunchDetails(detailsUpdate: LaunchDetailsUpdate): void {
    this.launchesState.updateLaunchDetails(detailsUpdate);
  }
}
