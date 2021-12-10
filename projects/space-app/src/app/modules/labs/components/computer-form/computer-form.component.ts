import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-computer-form',
  templateUrl: './computer-form.component.html',
  styleUrls: ['./computer-form.component.scss']
})
export class ComputerFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
