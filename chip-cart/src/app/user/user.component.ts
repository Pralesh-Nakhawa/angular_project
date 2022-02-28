import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { user } from '../userInterface';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  formGroup!: FormGroup;
  userData: any;
  constructor(private api: LoginServiceService, private route: Router, public dialog: MatDialog) { }
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(DialogOverviewExampleDialog, dialogConfig);



  }

  ngOnInit(): void {
    this.getProfile();

  }
  getProfile() {
    const userIdDetail = parseInt(localStorage.getItem('token') as string)
    this.api.getUserById(userIdDetail).subscribe(res => { this.userData = res.userDetails });


  }
  getAllUser() {
    this.api.getUser()
      .subscribe(res => { this.userData = res })
  }
  getUserDetail(user: any) {
    this.api.getUserById(user.id)
      .subscribe(res => { this.userData = res.userDetails })
  }
  deleteUserDetail(user: any) {
    this.api.deleteUser(user.id)
      .subscribe(res => {
        alert("user deleted");
        this.getAllUser();
        localStorage.removeItem('token');
        this.route.navigate(["/products"]);
      })
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  formGroup!: FormGroup;
  userModel: user = new user();
  userData!: any;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    private api: LoginServiceService,
  ) { }

  onNoClick() {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.getProfile();
    this.initForm();

  }
  getProfile() {
    const userIdDetail = parseInt(localStorage.getItem('token') as string)
    this.api.getUserById(userIdDetail).subscribe(res => { this.userData = res.userDetails });
  }
  initForm() {

    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }
  updateUserDetail() {
    if (this.formGroup.valid) {
      this.userModel.id = parseInt(localStorage.getItem('token') as string);
      this.userModel.name = this.formGroup.value.name;
      this.userModel.address = this.formGroup.value.address;
      this.userModel.mobile = this.formGroup.value.mobile;
      this.userModel.email = this.userData.email;
      this.userModel.password = this.userData.password;
      this.api.updateUser(this.userModel, this.userModel.id).subscribe(res => {
        alert("Update Successfull");
        this.formGroup.reset();
        this.dialogRef.close();
      })
    }

  }
}
