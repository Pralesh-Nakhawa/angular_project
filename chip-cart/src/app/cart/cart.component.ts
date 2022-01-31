import { Component, OnInit } from '@angular/core';
// import { Products } from '../product/Iproduct';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
// product=Products;
public products : any[]=[];
 public grandTotal !: number;
  constructor(private cartService : CartService) { }


  ngOnInit(): void {
this.cartService.getProductList().subscribe(data=>{
  this.products = data;
  // console.log(this.products);
  this.products.forEach(element=>{
console.log(element.product);
  })
  this.grandTotal = this.cartService.getTotalPrice();
})
}
  removeItem(item: any){
    this.cartService.removeCartItem(item);
}

emptycart(){
  this.cartService.removeAllCart();
}

}
