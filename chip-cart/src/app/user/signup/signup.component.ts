import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../login-service.service';
import { user } from '../../userInterface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup!: FormGroup;
  userModel: user = new user();
  hide = true;
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirm: new FormControl('', [Validators.required]),
    })
  }
  postUserDetail() {
    if (this.formGroup.valid) {
      this.userModel.name = this.formGroup.value.name;
      this.userModel.address = this.formGroup.value.address;
      this.userModel.mobile = this.formGroup.value.mobile;
      this.userModel.email = this.formGroup.value.email;
      this.userModel.password = this.formGroup.value.password;
      if (this.userModel.password === this.formGroup.value.confirm) {

        this.api.postUser(this.userModel).subscribe(res => {

          alert("Sign up Successfull");
          this.formGroup.reset();
          this.route.navigate(["/login"]);

        })
      }
    }
  }
  constructor(private formbuilder: FormBuilder, private api: LoginServiceService, private route: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

}
