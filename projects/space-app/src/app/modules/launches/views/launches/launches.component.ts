import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../../services/launches/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  launches = this.launchesService.getLaunches();

  constructor(private launchesService: LaunchesService) { }

  ngOnInit(): void {
  }

}
