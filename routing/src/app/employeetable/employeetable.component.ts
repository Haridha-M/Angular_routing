import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
interface PersonData{
  id:any;
  name:any;
  age:any;
  location:any;
  gender:any;
  color:any;
  hobbies:any;
  }
@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent {
  PersonDetails:PersonData[]=[];
  id:any;
  name:any;
  age:any;
  location:any;
  gender:any;
  color:any;
  hobbies:any;
constructor(private s:ServiceService,private route:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getPersonData()
  }
getPersonData(){
  this.s.getDataFromPerson().subscribe((data:any)=>
  this.PersonDetails=data)
}
editUserEmployee(id:any){
  // console.log(id);
  // this.s.getPersonDetailsbyId(id).subscribe((data:any)=>{
  //   console.log(data);
   
  // })
  this.editListPerson(id);
}
editListPerson(id:number){
  let visible=true
  this.route.navigate(['editformPerson',visible, id])
}
deleteUserEmployee(id:any){
  console.log('deleted');
  this.s.deleteUserPerson(id).subscribe((data)=>{
    console.log(data);
    this.getPersonData()
    
  })

 }
 backToEmployeeForm(){
  this.route.navigate(['backEmployee'])
 }
}

