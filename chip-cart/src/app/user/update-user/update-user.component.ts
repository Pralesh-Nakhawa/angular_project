import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';
import { user } from 'src/app/userInterface';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  formGroup!:FormGroup;
  userModel: user =new user() ;
  initForm(){
    this.formGroup=new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required]),
      name : new FormControl('', [Validators.required]),
      address : new FormControl('', [Validators.required]),
      mobile : new FormControl('', [Validators.required]),
    })
  }
  updateUserDetail(){
    if(this.formGroup.valid){
    this.userModel.name= this.formGroup.value.name;
    this.userModel.address= this.formGroup.value.address;
    this.userModel.mobile= this.formGroup.value.mobile;
    this.userModel.email= this.formGroup.value.email;
    this.userModel.password= this.formGroup.value.password;

    this.api.updateUser(this.userModel,this.userModel.id).subscribe(res=>{
      
      alert("Sign up Successfull");
      this.formGroup.reset();
     this.route.navigate(["/user"]);

    })
  }
  
  }
  constructor(private formbuilder:FormBuilder, private api:LoginServiceService ,private route:Router) { }
    
  ngOnInit(): void {
    this.initForm();
  }

}
