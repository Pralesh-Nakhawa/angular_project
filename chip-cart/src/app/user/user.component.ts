import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { user } from '../userInterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData!:any;
  constructor( private api:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    // this.getAllUser();
    this.getProfile();
  }
  getProfile(){
    const userIdDetail=parseInt(localStorage.getItem('token')as string)
    this.api.getUserById(userIdDetail).subscribe(res=>{this.userData=res});  
    
    console.log(this.userData.name);
  }
  getAllUser(){
    this.api.getUser()
    .subscribe(res=>{this.userData=res})
  }
  getUserDetail(user:any){
    this.api.getUserById(user.id)
    .subscribe(res=>{this.userData=res})
  }
  deleteUserDetail(user:any){
    this.api.deleteUser(user.id)
    .subscribe(res=>{
      alert("user deleted");
      this.getAllUser();
      localStorage.removeItem('token');
    this.route.navigate(["/products"]);
    })
  }
  
}
