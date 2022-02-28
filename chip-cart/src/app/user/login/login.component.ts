import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginServiceService } from '../../login-service.service';
import { user } from '../../userInterface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: user[] = [];
  userData!: any;
  hide = true;
  constructor(private api: LoginServiceService, private route: Router) { }
  ngOnInit(): void {
    this.initForm();
  }
  formGroup!: FormGroup;
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  loginProcess() {
    if (this.formGroup.valid) {
      this.api.getUser()
        .subscribe(res => {
          const user = res.userDetails.find((a: any) => {
          var toConvertString=atob(a.password);
          var len=toConvertString.length;
          var bytes=new Uint8Array(len);
          for(var i=0;i<len;i++){
            bytes[i]=toConvertString.charCodeAt(i);
          }
            var toConvert=new TextDecoder().decode(bytes.buffer);
            var password=toConvert.slice(0,toConvert.length-8);
            return a.email === this.formGroup.value.email && password === this.formGroup.value.password
          });
          if (user) {
            localStorage.setItem('token', user.id);
            this.formGroup.reset();
            this.route.navigate(["/products"])
          }
          else {
            alert("login unsucess");
          }
        })
    }
  }

}
