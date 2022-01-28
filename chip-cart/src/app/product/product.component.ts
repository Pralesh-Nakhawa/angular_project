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
constructor(private api :ProductService , private CartService:CartService) { }

ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res:any)=>{
      this.productList=res;
    })

}
addtocart(item: any){
  this.addtocart(item)

}

}
