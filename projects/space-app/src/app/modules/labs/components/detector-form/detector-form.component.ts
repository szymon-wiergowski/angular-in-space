import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detector-form',
  templateUrl: './detector-form.component.html',
  styleUrls: ['./detector-form.component.scss']
})
export class DetectorFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
