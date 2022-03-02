import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

export interface DialogData {
  productList: any;

}
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})

export class ViewProductComponent implements OnInit {

  productList: any;
  displayedColumns: string[] = ['index', 'ptitle', 'image', 'descp', 'price', 'catg', 'action'];
  constructor(private api: ProductService, private route: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProductByUid();
  }

  getAllProducts() {
    this.api.getProduct()
      .subscribe((res: any) => {
        this.productList = res;
      })
  }
  getProductByUid() {
    this.api.getProductByuserid(parseInt(localStorage.getItem('token') as string))
      .subscribe((res: any) => {
        this.productList = res;
      })
  }
  deleteProduct(product: any) {
    var productid = product.id
    this.api.deleteProduct(productid).subscribe((res: any) => {
      alert('product deleted');
      this.getProductByUid();

      this.route.navigate(["/view-product"]);
    })
  }
  
  openDialog(product: any): void {
    const dialogRef = this.dialog.open(UpdateProductComponent, {

      width: '50%',
      data: { productList: product },
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
}
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.html',
})
export class UpdateProductComponent {
  updateProductForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private api: ProductService,
  ) { }
  ngOnInit(): void {
    this.updateProductForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      categories: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    })
  }
  updateProduct() {
    if (this.updateProductForm.valid) {
      // console.log(this.updateProductForm.value)
      this.updateProductForm.value.id=this.data.productList.id;
      this.updateProductForm.value.userid=parseInt(localStorage.getItem('token') as string);
      this.api.updateProduct(this.updateProductForm.value, this.data.productList.id)
        .subscribe((res) => {
          alert("Product Added Successfully");
          this.onNoClick();
        })
    }
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}