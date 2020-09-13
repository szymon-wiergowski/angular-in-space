import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab-equipments-form',
  templateUrl: './lab-equipments-form.component.html',
  styleUrls: ['./lab-equipments-form.component.css']
})
export class LabEquipmentsFormComponent implements OnInit {
  @Input() formArray: FormArray;

  get equipmentFormGroups(): FormGroup[] {
    return this.formArray.controls as FormGroup[];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
