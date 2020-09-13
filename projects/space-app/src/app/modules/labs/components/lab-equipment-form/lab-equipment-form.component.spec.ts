import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEquipmentFormComponent } from './lab-equipment-form.component';

describe('LabEquipmentFormComponent', () => {
  let component: LabEquipmentFormComponent;
  let fixture: ComponentFixture<LabEquipmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabEquipmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEquipmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
