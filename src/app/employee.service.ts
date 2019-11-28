import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url='http://localhost:9898/emp'
  constructor(private http:HttpClient) { }
  getEmployees()
  {
    return this.http.get(this.url)
  }
}
