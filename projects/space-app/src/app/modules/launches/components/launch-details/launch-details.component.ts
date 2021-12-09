import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  @Input() details: string | null = null;
  @Output() detailsUpdate = new EventEmitter<string>();

  editorOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleEditor(): void {
    this.editorOpened = !this.editorOpened;
  }

  update(details: string): void {
    this.detailsUpdate.emit(details);
    this.toggleEditor();
  }
}
