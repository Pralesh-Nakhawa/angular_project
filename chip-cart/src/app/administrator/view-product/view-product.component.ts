import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  public productList:any;
  constructor(private api:ProductService , private route:Router) { }

  ngOnInit(): void {
this.getAllProducts();
    // this.api.getProduct()
    // .subscribe((res:any)=>{
    //   this.productList=res;
    // })

  }

  getAllProducts(){
    this.api.getProduct()
    .subscribe((res:any)=>{
      this.productList=res;
    })
  }

  deleteProduct(product :any){
    var productid=product.id
    this.api.deleteProduct(productid).subscribe((res:any)=>{
      alert('product deleted');
     this.getAllProducts();

    this.route.navigate(["/view-product"]);
    })
  }

  // updateProduct(){
  //   this.api.updateProduct().subscribe((res:any)=>{
  //     alert('product updated');
  //    this.getAllProducts();

  //   this.route.navigate(["/view-product"]);
// })

// }
}
