import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Moon } from 'space-api/types';

@Component({
  selector: 'app-lab-details-form',
  templateUrl: './lab-details-form.component.html',
  styleUrls: ['./lab-details-form.component.css']
})
export class LabDetailsFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() moons!: Moon[];

  constructor() { }

  ngOnInit(): void {
  }

}
