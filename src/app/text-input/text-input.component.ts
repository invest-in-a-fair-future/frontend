import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  @Input() label: string;

  @Input() model: any;
  @Input() field: string; // the model field to bind to

  constructor() { }

  ngOnInit() {
  }

}
