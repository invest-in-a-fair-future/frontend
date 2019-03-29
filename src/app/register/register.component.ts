import { Component, OnInit } from '@angular/core';
import { Company } from '../classes/company';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public company: Company;

  constructor() { }

  ngOnInit() {
  }

}
