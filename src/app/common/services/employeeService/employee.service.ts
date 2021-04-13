import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  //get all employees data
  getAllEmployees() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }

  //get employee data by id
  getEmployeeDataById(id: any) {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employee/" + id);
  }

  //create a new employee
  createNewEmployee(params: any) {
    return this.http.post("http://dummy.restapiexample.com/api/v1/create", params);
  }

  //update employee data
  updateEmployeeData(params: any) {
    return this.http.put("http://dummy.restapiexample.com/api/v1/update/" + params.id, params);
  }

  //delete employee data
  deleteEmployee(id: any){
    return this.http.delete("http://dummy.restapiexample.com/api/v1/delete/" + id);
  }

}
