import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';


import { user } from '../userInterface';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData!:any;
  userId!: string;
  public searchTerm :string="";
  public totalItem : number = 0;
  ngOnInit(): void {
    this.CartService.getProductList()
    .subscribe(res=>{
      this.totalItem = res.length;
    });
   
  }
  getProfile(){
    const userId=parseInt(localStorage.getItem('token')as string)
    this.api.getUserById(userId).subscribe(res=>{this.userData=res});    
  }
  constructor(private CartService:CartService,private api:LoginServiceService,private route:Router ,private productservice:ProductService) {}
  loggedin(){ 
    this.userId=localStorage.getItem('token') as string;
    return this.userId
  }
  onLogout(){
    localStorage.removeItem('token');
    this.route.navigate(["/products"])
  }
  search(event:any){
    var searchText = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.productservice.getProductbySearch(searchText)
   .subscribe((res:any)=>{
     
  })
}
}
