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
    this.orderService.postOrder({ userid: localStorage.getItem('token') })
      .subscribe(res => {
        alert('ordered sucessful;');
        this.emptycart();
      })

  }
}
