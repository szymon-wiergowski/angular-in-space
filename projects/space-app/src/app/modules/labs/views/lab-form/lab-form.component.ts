import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LabsService } from 'space-api/services';
import { Lab } from 'space-api/types';
import { LabFormService } from '../../services/lab-form/lab-form.service';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {
  form: FormGroup;
  step: Observable<keyof Lab> = this.route.queryParams
    .pipe(
      map(params => params.step ?? 'details')
    );

  get detailsFormGroup(): FormGroup {
    return this.form.get('details') as FormGroup;
  }

  get equipmentsFormArray(): FormArray {
    return this.form.get('equipments') as FormArray;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private labService: LabsService,
              private formService: LabFormService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.form = this.formService.buildForm(data.lab));
  }

  saveLab(): void {
    if (this.form.invalid) {
      alert('Popraw formularz!');
      return;
    }

    this.labService.saveLab(this.form.value).subscribe(
      () => this.router.navigate(['../..'], {relativeTo: this.route}),
      () => alert('Zapis nie powiódł się!')
    );
  }
}
