import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { EmployeetableComponent } from './employeetable/employeetable.component';
const routes: Routes = [
  {
    path:'table',
    component:TableComponent
  },
  {
    path:'form',
    component:FormComponent
  },
  {
    path:'tabletrack',
    component:TableComponent
  },
  {
    path:'editform/:visible/:id',
    component:FormComponent
  },
  {
    path:'back',
    component:FormComponent
  },
  {
    path:'employeeform',
    component:EmployeeformComponent
  },
  {
    path:'employeetable',
    component:EmployeetableComponent
  },
  {
    path:'employeetabletrack',
    component:EmployeetableComponent
  },
  {
    path:'editformPerson/:visible/:id',
    component:EmployeeformComponent
  },
  {
    path:'backEmployee',
    component:EmployeeformComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
