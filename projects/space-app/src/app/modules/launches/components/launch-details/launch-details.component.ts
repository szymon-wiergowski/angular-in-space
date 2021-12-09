import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  @Input() details: string | null = null;
  @Output() detailsUpdate = new EventEmitter<string>();

  editorOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  get formattedDetails(): string {
    return this.details?.split('').map(char => char.toUpperCase()).join('') ?? '';
  }

  toggleEditor(): void {
    this.editorOpened = !this.editorOpened;
  }

  update(details: string): void {
    this.detailsUpdate.emit(details);
    this.toggleEditor();
  }
}
