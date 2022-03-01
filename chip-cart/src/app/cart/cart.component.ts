import { Component, OnInit } from '@angular/core';

import { CartService } from '../service/cart.service';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public products: any[] = [];
  public grandTotal !: number;
  public orderDetail: any;

  constructor(private cartService: CartService, private orderService: OrderService) { }


  ngOnInit(): void {
    this.cartService.getProductList().subscribe(data => {
      this.products = data;
      // console.log(this.products);
      this.products.forEach(element => {
        // console.log(element.product);
      })
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptycart() {
    this.cartService.removeAllCart();
  }
  placeOrder() {
    //sort productids from carts and store in DB
    var len = this.cartService.cartItemList.length;
    console.log(this.cartService.cartItemList);
    for (var i = 0; i < len; i++) {
      var quantity=this.cartService.cartItemList[i].product.pQuantity;
      if(quantity==null){
        quantity=1;
      }
      this.orderService.postOrder({
        userid: parseInt(localStorage.getItem('token') as string),
        productids: this.cartService.cartItemList[i].product.id,
        productname: this.cartService.cartItemList[i].product.title,
        productprice: this.cartService.cartItemList[i].product.price,
        productquantity: parseInt( quantity as string)
      })
        .subscribe(res => {
        })
    }
    alert('ordered sucessful;');
    this.emptycart();
  }
}
