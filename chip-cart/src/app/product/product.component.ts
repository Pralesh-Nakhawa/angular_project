import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../service/cart.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList: any;
  public pQuantity: number = 1;
  constructor(private api: ProductService, private CartService: CartService, private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.route.queryParams.subscribe((params: any) => {
      if (params.data != null) {
        this.searchByName(params.data);
      }
    });

    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res.productDetails;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: this.pQuantity, total: a.price });
        })
      });
  }
  addtoCart(productList: any, pQuantity: number = 1) {
    console.log(pQuantity);
    this.CartService.addtoCart(productList, pQuantity);
  }
  getProductByCat(categorie: string) {
    this.api.productByCat(categorie)
      .subscribe((res: any) => {
        this.productList = res.productDetails;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: this.pQuantity, total: a.price });
        })
      });
  }
  searchByName(searchText: string) {
    this.api.getProductbySearch(searchText)
      .subscribe((res: any) => {
        this.productList = res.productDetails;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: this.pQuantity, total: a.price });
        })
      });
  }
}
