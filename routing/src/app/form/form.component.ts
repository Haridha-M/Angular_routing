import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // tabletrack:any;
  id:any;
  contactName:any;
  Email:any;
  Comments:any;
  visible:any=false;
constructor(public s:ServiceService,private route:Router, public actroute:ActivatedRoute){

}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let id = this.actroute.snapshot.paramMap.get('id')
    this.visible=this.actroute.snapshot.paramMap.get('visible')
    this.s.getStudentDetailsbyId(id).subscribe((data:any)=>{
    this.id=data[0].id;
    this.contactName=data[0].contactName;
    this.Email=data[0].Email;
    this.Comments=data[0].Comments;
  })
  }
get(){
  this.formnavigate()
}
  insertUser() {
    let data:any={
      contactName:this.contactName,
      Email:this.Email,
      Comments:this.Comments
       }
       this.s.insertUserStudent(data).subscribe((data)=>{
        console.log(data);
          this.formnavigate()
        
       })
 
  }
  formnavigate(){
    this.route.navigate(['tabletrack'])
  }
  updateUser(){
    let data:any={
     id:this.id,
     contactName:this.contactName,
     Email:this.Email,
     Comments:this.Comments
      }
      console.log(data);
      
      this.s.updateUserStudent(data).subscribe((data)=>{
       console.log(data);
       this.formnavigate()
       
      })
     }
}
