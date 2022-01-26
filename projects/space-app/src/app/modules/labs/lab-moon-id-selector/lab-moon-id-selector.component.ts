import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Moon } from 'space-api/types';

@Component({
  selector: 'app-lab-moon-id-selector',
  templateUrl: './lab-moon-id-selector.component.html',
  styleUrls: ['./lab-moon-id-selector.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: LabMoonIdSelectorComponent, multi: true}
  ]
})
export class LabMoonIdSelectorComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() moons!: Moon[];

  // kontrolka do wyboru planety
  planetControl = new FormControl();

  // zbiór dostępnych opcji nazw planet
  planetOptions: Set<string> = new Set();

  // kontrolka do wyboru księżyca
  moonControl = new FormControl();

  // zbiór dostępnych opcji księżyców
  moonOptions: Set<Moon> = new Set();

  // property na funkcje onChange i onTouch
  onChange = (value: number) => {};
  onTouch = () => {};

  ngOnInit(): void {
    // zmiana wartości kontrolki przy zmianie księżyca
    this.moonControl.valueChanges
      .subscribe(moonId => this.onChange(moonId));

    // zmiana dostępnych opcji oraz wybranego księżyca przy zmianie planety
    this.planetControl.valueChanges
      .subscribe(() => {
        this.updateOptions();
        this.updateMoon();
      });
  }

  // reagowanie na zmianę wartości w @Input() moons
  ngOnChanges(): void {
    this.updatePlanet();
    this.updateOptions();
  }

  // reagowanie na zmianę wartości kontrolki z zewnątrz
  writeValue(moonId: number): void {
    this.moonControl.setValue(moonId);
    this.updatePlanet();
    this.updateOptions();
  }

  // rejestracja funkcji onChange
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  // rejestracja funkcji onTouch
  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  // zmiana dostępności kontrolek
  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.disableControls() : this.enableControls();
  }

  private disableControls(): void {
    this.moonControl.disable();
    this.planetControl.disable();
  }

  private enableControls(): void {
    this.moonControl.enable();
    this.planetControl.enable();
  }

  private updateOptions(): void {
    if (!this.moons) { return; }

    this.planetOptions.clear();
    this.moonOptions.clear();
    this.moons.forEach(moon => {
      this.planetOptions.add(moon.planet);
      if (this.planetControl.value === moon.planet) {
        this.moonOptions.add(moon);
      }
    });
  }

  private updatePlanet(): void {
    if (!this.moons) { return; }

    const planet = this.moons.find(moon => moon.id === this.moonControl.value)?.planet;
    this.planetControl.setValue(planet, {emitEvent: false});
  }

  private updateMoon(): void {
    const moon = this.moonOptions.values().next().value;
    this.moonControl.setValue(moon?.id);
  }
}
