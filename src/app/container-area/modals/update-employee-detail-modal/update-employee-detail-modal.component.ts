import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeService } from 'src/app/common/services/employeeService/employee.service';

@Component({
  selector: 'app-update-employee-detail-modal',
  templateUrl: './update-employee-detail-modal.component.html',
  styleUrls: ['./update-employee-detail-modal.component.css']
})
export class UpdateEmployeeDetailModalComponent implements OnInit {
  @Input() modalParams: any;
  @ViewChild('employeeForm') employeeForm: NgForm | undefined;
  isSuccess: boolean = false;
  employeeData: any = {};
  employeeNameError: string = '';
  employeeAgeError: string = '';
  employeeSalaryError: string = '';
  timer: any = null;
  timer1: any = null;
  timer2: any = null;
  integerRegex: RegExp = /^[0-9][0-9]*$/;
  isOnlyForView: boolean = false;

  constructor(private activeModal: NgbActiveModal, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeData = this.modalParams.employeeData;
    this.isOnlyForView = this.modalParams.isOnlyForView;
  }

  closeModal() {
    this.activeModal.close(this.isSuccess);
  }

  //saving the updated employee data
  updateEmployeeData() {
    //check for employee name
    if (!this.employeeData.employee_name) {
      this.employeeNameError = ' Employee Name is mandatory.'
    }
    else {
      if (this.employeeData.employee_name.length < 3) {
        this.employeeNameError = ' Employee name must contain atleast 3 chars.';
      }
      else {
        this.employeeNameError = '';
      }
    }
    //check for employee age
    if (!this.employeeData.employee_age) {
      this.employeeAgeError = ' Employee age is mandatory.'
    }
    else {
      if (!this.integerRegex.test(this.employeeData.employee_age)) {
        this.employeeAgeError = ' Decimal values are not allowed for employee age.';
      }
      else {
        this.employeeAgeError = '';
      }
    }
    //check for employee salary
    if (!this.employeeData.employee_salary) {
      this.employeeSalaryError = ' Employee salary is mandatory.'
    }
    else {
      if (!this.integerRegex.test(this.employeeData.employee_salary)) {
        this.employeeSalaryError = ' Decimal values are not allowed for employee salary.';
      }
      else {
        this.employeeSalaryError = '';
      }
    }
    if (this.employeeAgeError || this.employeeNameError || this.employeeSalaryError)
      return;
    let params: any = {};
    params.id = this.employeeData.id;
    params.name = this.employeeData.employee_name;
    params.age = this.employeeData.employee_age;
    params.salary = this.employeeData.employee_salary;
    this.employeeService.updateEmployeeData(params).subscribe(
      (resp: any) => {
        this.isSuccess = true;
        this.closeModal();
      },
      (error: any) => {

      }
    );
  }
}
