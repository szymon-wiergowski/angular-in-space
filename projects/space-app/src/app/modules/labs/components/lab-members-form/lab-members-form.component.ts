import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab-members-form',
  templateUrl: './lab-members-form.component.html',
  styleUrls: ['./lab-members-form.component.css']
})
export class LabMembersFormComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
