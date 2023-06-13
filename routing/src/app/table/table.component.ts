import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
interface studentData{
  id:number;
  contactName:string;
  Email:string;
  Comments:string
  }
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
studentDetails:studentData[]=[];
id:any;
contactName:any;
Email:any;
Comments:any;
constructor(private s:ServiceService,private route:Router){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.get()
  }
get(){
  this.s.getData().subscribe((data:any)=>
  this.studentDetails=data)
}
editUser(id:any){
  console.log(id);
  this.s.getStudentDetailsbyId(id).subscribe((data:any)=>{
    console.log(data);
   
  })
  this.editList(id);
}
editList(id:number){
  let visible=true
  this.route.navigate(['editform',visible, id])
}
deleteUser(id:any){
  console.log('deleted');
  this.s.deleteUserStudent(id).subscribe((data)=>{
    console.log(data);
    this.get()
    
  })

 }
 backToForm(){
  this.route.navigate(['back'])
 }
 
}
