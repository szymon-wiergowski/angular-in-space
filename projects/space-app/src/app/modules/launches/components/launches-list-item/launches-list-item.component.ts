import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Launch } from 'space-api/types';

@Component({
  selector: 'tbody[appLaunchesListItem]',
  templateUrl: './launches-list-item.component.html',
  styleUrls: ['./launches-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchesListItemComponent implements OnInit {
  @Input() launch!: Launch;
  constructor() { }

  ngOnInit(): void {
    console.log('LaunchListItem created');
  }

}
