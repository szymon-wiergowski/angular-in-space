import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabMembersFormComponent } from './lab-members-form.component';

describe('LabMembersFormComponent', () => {
  let component: LabMembersFormComponent;
  let fixture: ComponentFixture<LabMembersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabMembersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabMembersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
