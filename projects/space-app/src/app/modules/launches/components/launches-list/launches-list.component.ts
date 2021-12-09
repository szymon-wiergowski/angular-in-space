import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Launch, LaunchDetailsUpdate } from 'space-api/types';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LaunchesListComponent implements OnInit {
  @Input() launches!: Launch[];
  @Output() launchDetailsUpdate = new EventEmitter<LaunchDetailsUpdate>();

  constructor() { }

  ngOnInit(): void {
  }

  updateDetails(launch: Launch, $event: string): void {
    this.launchDetailsUpdate.emit({id: launch.id, details: $event});
  }

  trackByFn(index: number, launch: Launch): number {
    return launch.id;
  }
}
