import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDetailModalComponent } from './update-employee-detail-modal.component';

describe('UpdateEmployeeDetailModalComponent', () => {
  let component: UpdateEmployeeDetailModalComponent;
  let fixture: ComponentFixture<UpdateEmployeeDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
