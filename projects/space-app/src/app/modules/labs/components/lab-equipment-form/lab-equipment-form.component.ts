import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab-equipment-form',
  templateUrl: './lab-equipment-form.component.html',
  styleUrls: ['./lab-equipment-form.component.css']
})
export class LabEquipmentFormComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
