import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../classes/company';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  @Output() companySubmit = new EventEmitter<Company>();

  public company: Company = new Company();

  private readonly minStep = 1;
  private readonly maxStep = 3;
  public step: number = 1;

  constructor() { }

  ngOnInit() {
  }

  public prevStep(): void {
    this.step--;
    if (this.step < this.minStep) {
      this.step = this.minStep;
    }
  }
  public nextStep(): void {
    this.step++;
    if (this.step > this.maxStep) {
      this.step = this.maxStep;
    }
  }

  public submit(): void {
    this.companySubmit.emit(this.company);
  }

}
