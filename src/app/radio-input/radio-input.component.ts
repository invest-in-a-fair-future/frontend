import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss']
})
export class RadioInputComponent implements OnInit {

  @ViewChild('rad') radioInput: ElementRef;

  @Input() label: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

  public toggleCheck(): void {
    this.radioInput.nativeElement.checked = true;
  }

}
