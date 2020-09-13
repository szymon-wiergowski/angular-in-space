import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { LabsService } from 'space-api/services';
import { Lab } from 'space-api/types';
import { LabFormService } from '../../services/lab-form/lab-form.service';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css'],
  providers: [LabFormService]
})
export class LabFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  destroy = new Subject<void>();
  step: Observable<keyof Lab> = this.route.params
    .pipe(
      map(params => params.step)
    );

  get detailsFormGroup(): FormGroup {
    return this.form.get('details') as FormGroup;
  }

  get membersFormGroup(): FormGroup {
    return this.form.get('members') as FormGroup;
  }

  get equipmentFormGroup(): FormGroup {
    return this.form.get('equipment') as FormGroup;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private labService: LabsService,
              private formService: LabFormService) { }

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy))
      .subscribe(data => this.form = this.formService.buildForm(data.lab));
  }

  ngOnDestroy(): void {
    this.destroy.next();
  }

  saveLab(): void {
    if (this.form.invalid) {
      console.log(this.form.value);
      alert('Popraw formularz!');
      return;
    }

    this.labService.saveLab(this.form.value).subscribe(
      () => this.router.navigate(['../../..'], {relativeTo: this.route}),
      () => alert('Zapis nie powiódł się!')
    );
  }
}
