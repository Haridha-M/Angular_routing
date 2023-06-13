import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url='http://localhost:9000'
  constructor(private http:HttpClient) { }
  
  getData(){
    return this.http.get(this.url+'/get')
  }
  insertUserStudent(data:any){
    return this.http.post(this.url+'/insert',data)
  }
  getStudentDetailsbyId(id:string|null){
    return this.http.get(this.url+'/getbyId/'+id)
  }
  updateUserStudent(data:any){  
    return this.http.put(this.url+'/update',data)
  }
  deleteUserStudent(id:any){
    return this.http.put(this.url+'/delete',{id:id})
  }

  // localHost:4000
  url1='http://localhost:4000'
  getDataFromPerson(){
    return this.http.get(this.url1+'/get')
  }
  insertUserPerson(data:any){
    return this.http.post(this.url1+'/insert',data)
  }
  getPersonDetailsbyId(id:string|null){
    return this.http.get(this.url1+'/getbyId/'+id)
  }
  updateUserPerson(data:any){ 
    console.log('update'+data.id);
     
    return this.http.put(this.url1+'/update',data)
  }
  deleteUserPerson(id:any){
    return this.http.put(this.url1+'/delete',{id:id})
  }
}
