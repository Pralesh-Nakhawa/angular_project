import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = [];

  public productList = new BehaviorSubject<any>([]);
  constructor() { }

  getProductList() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any, pQuantity: number) {
    const _product = { product: product, quantity: pQuantity };
    this.cartItemList.push(_product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      const q: number = parseInt(a.quantity);
      console.log(q);
      grandTotal += a.product.total * q;
    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((res: any, index: any) => {
      if (product.id === res.id) {
        this.cartItemList.splice(index, 1);
      }
    })
  }
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}

