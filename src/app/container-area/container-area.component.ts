import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../common/services/employeeService/employee.service';
import { UtilService } from '../common/services/utilService/util.service';
import { AddNewEmployeeModalComponent } from './modals/add-new-employee-modal/add-new-employee-modal.component';
import { UpdateEmployeeDetailModalComponent } from './modals/update-employee-detail-modal/update-employee-detail-modal.component';

@Component({
  selector: 'app-container-area',
  templateUrl: './container-area.component.html',
  styleUrls: ['./container-area.component.css']
})
export class ContainerAreaComponent implements OnInit {
  employeesData: Array<any> = [];
  filteredEmployees: Array<any> = [];
  searchText: string = '';
  searchTextSubscription: Subscription | undefined;

  constructor(private employeeService: EmployeeService, private modalService: NgbModal, private utilService: UtilService) {

  }

  ngOnInit(): void {
    this.searchTextSubscription = this.utilService.getDashboardMenuValue().subscribe((resp: string) => {
      this.searchText = resp;
      this.getAllEmployees();
    });
    if (!this.searchText)
      this.getAllEmployees();
  }

  getAllEmployees() {
    this.filteredEmployees = [];
    this.employeeService.getAllEmployees().subscribe(
      (resp: any) => {
        this.employeesData = resp.data;
        if (this.searchText) {
          this.employeesData.forEach((employee) => {
            if (employee.employee_name === this.searchText) {
              this.filteredEmployees.push(employee);
            }
          });
          this.employeesData = (this.filteredEmployees && this.filteredEmployees.length > 0) ? this.filteredEmployees : [];
        }
      },
      (error: any) => {
        console.error("this.employeeService.getAllEmployees() failed", this.employeesData, error);
      }
    );
  }

  deleteEmployee(id: any, index: number) {
    this.employeeService.deleteEmployee(id).subscribe(
      (resp: any) => {
        this.employeesData.splice(index, 1);
      },
      (error: any) => {
        console.error("this.employeeService.deleteEmployee() failed", id, error);
      }
    );
  }

  createNewEmployee() {
    let modalRef = this.modalService.open(AddNewEmployeeModalComponent, { size: 'lg', windowClass: 'addTimeSheet modalCntrl detailsviewsheet', backdrop: 'static', keyboard: false });
    modalRef.result.then((resp: any) => {
      if (resp)
        this.getAllEmployees();
    });
  }

  updateEmployeeDetail(employee: any) {
    let modalRef = this.modalService.open(UpdateEmployeeDetailModalComponent, { size: 'lg', windowClass: 'addTimeSheet modalCntrl detailsviewsheet', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.modalParams = {
      employeeData: employee,
      isOnlyForView: false
    };
    modalRef.result.then((resp: any) => {
      if (resp)
        this.getAllEmployees();
    });
  }

  openViewEmployeeDetail(employee: any) {
    let modalRef = this.modalService.open(UpdateEmployeeDetailModalComponent, { size: 'lg', windowClass: 'addTimeSheet modalCntrl detailsviewsheet', backdrop: 'static', keyboard: false });
    modalRef.componentInstance.modalParams = {
      employeeData: employee,
      isOnlyForView: true
    };
    modalRef.result.then((resp: any) => {
      
    });
  }

}
