import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    EmployeeformComponent,
    EmployeetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
