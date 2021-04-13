import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAreaComponent } from './container-area.component';

describe('ContainerAreaComponent', () => {
  let component: ContainerAreaComponent;
  let fixture: ComponentFixture<ContainerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
