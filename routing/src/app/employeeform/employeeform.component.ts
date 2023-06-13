import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Data } from '../data';
// import { NgForm } from '@angular/forms';
// import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent {
  // name:any;
  //  data=new Data('hari','88','chennai','female','red')
// constructor(public s:ServiceService,private route:Router)


tabletrack:any;
  id:any;
 name:any;
  age:any;
  location:any;
  gender:any;
  color:any;
  hobbies:any;
  visible:any=false;
constructor(public s:ServiceService,private route:Router, public actroute:ActivatedRoute){

}
// fn(value:any){
//   let data:any={
//     name:this.name,
//     age:this.age,
//     location:this.location,
//     gender:this.gender,
//     color:this.color,
//     hobbies:this.hobbies
//      }
//      this.s.insertUserPerson(data).subscribe((data)=>{
//       console.log(data);
//         console.log(value);
//         this.employeeformnavigate()
//      })
  
  
// }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id = this.actroute.snapshot.paramMap.get('id')
    this.visible=this.actroute.snapshot.paramMap.get('visible')
    this.s.getPersonDetailsbyId(id).subscribe((data:any)=>{
    this.id=data[0].id;
    this.name=data[0].name;
    this.age=data[0].age;
    this.location=data[0].location;
    this.gender=data[0].gender;
    this.color=data[0].color;
    this.hobbies=data[0].hobbies;
  })
  }
  insertUserEmployee() {
    let data:any={
      name:this.name,
      age:this.age,
      location:this.location,
      gender:this.gender,
      color:this.color,
      hobbies:this.hobbies
       }
       this.s.insertUserPerson(data).subscribe((data)=>{
        console.log(data);
          this.employeeformnavigate()
        
       })
 
  }
  getEmployeeTable(){
    this.employeeformnavigate()
  }
  employeeformnavigate(){
    this.route.navigate(['employeetabletrack'])
  }
  updateUserEmployee(){
    let data:any={
     id:this.id,
     name:this.name,
     age:this.age,
     location:this.location,
     gender:this.gender,
     color:this.color,
     hobbies:this.hobbies
      }
      console.log( 'check'+ data);
      
      this.s.updateUserPerson(data).subscribe((data)=>{
       console.log(data);
       this.employeeformnavigate()
       
      })
     }
}





