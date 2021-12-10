import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formComponentMap } from '../form-component-map';

@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @ViewChild('formComponentContainer', {read: ViewContainerRef, static: true}) formComponentContainer!: ViewContainerRef;

  constructor() { }

  ngOnInit(): void {
    const formComponent = formComponentMap.get(this.formGroup.value.type)!;
    const ref = this.formComponentContainer.createComponent(formComponent);
    ref.instance.formGroup = this.formGroup;
  }

}
