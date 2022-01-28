import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { user } from '../userInterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData!:any;
  constructor( private api:LoginServiceService) { }

  ngOnInit(): void {
    this.getAllUser();
    
  }
  getAllUser(){
    this.api.getUser()
    .subscribe(res=>{this.userData=res})
  }
  deleteUserDetail(user:any){
    this.api.deleteUser(user.id)
    .subscribe(res=>{
      alert("user deleted");
      this.getAllUser();
    })
  }
  
}
