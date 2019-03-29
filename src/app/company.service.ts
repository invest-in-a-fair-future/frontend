import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './classes/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private readonly URL: string = '/backend/companies'

  constructor(private http:HttpClient) { }

  public register(company: any): Observable<Company> {
    return this.http.post<Company>(this.URL, company);
  }
}
