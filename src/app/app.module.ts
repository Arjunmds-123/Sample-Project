import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ContainerAreaComponent } from './container-area/container-area.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewEmployeeModalComponent } from './container-area/modals/add-new-employee-modal/add-new-employee-modal.component';
import { UpdateEmployeeDetailModalComponent } from './container-area/modals/update-employee-detail-modal/update-employee-detail-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerAreaComponent,
    AddNewEmployeeModalComponent,
    UpdateEmployeeDetailModalComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ContainerAreaComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddNewEmployeeModalComponent, UpdateEmployeeDetailModalComponent]
})
export class AppModule { }
