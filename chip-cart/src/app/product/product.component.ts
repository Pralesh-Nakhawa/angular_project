import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

import { ProductService } from '../service/product.service';
// import { Products } from './Iproduct';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product=Products;
  // product:Products={
  //   title:"",description:"",categories:"",price:0,image:""
  // }

public productList : any;
public pQuantity:number=1;

constructor(private api :ProductService , private CartService:CartService) { }

ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res:any)=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:this.pQuantity=1,total:a.price});

      })
      
    });


}
addtoCart(productList : any, pQuantity:number){
  console.log(pQuantity);
  this.CartService.addtoCart(productList,pQuantity);
}
getProductByCat(categorie:string){
  this.api.productByCat(categorie)
  .subscribe((res:any)=>{
    this.productList=res;
  });
}
}
