import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';

import { UpdateUserComponent } from './user/update-user/update-user.component';
import { MatMenuModule } from '@angular/material/menu';
import{ MatGridListModule } from '@angular/material/grid-list';
import { AdminComponent } from './admin/admin.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AddProductComponent } from './administrator/add-product/add-product.component';
import { UpdateProductComponent } from './administrator/update-product/update-product.component';
import { ViewProductComponent } from './administrator/view-product/view-product.component';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
  
    UpdateUserComponent,
    AdminComponent,
    AdministratorComponent,
    AddProductComponent,
    UpdateProductComponent,
    ViewProductComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
     MatMenuModule,
    MatGridListModule,
    MatBadgeModule,
    MatSelectModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
