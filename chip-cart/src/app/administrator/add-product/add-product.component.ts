import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
// import { Products } from '../product/Iproduct';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm !:FormGroup;
  public product : any;
  constructor(private formBuilder : FormBuilder , private api:ProductService, private route:Router) { }


  ngOnInit(): void {

    this.addProductForm=this.formBuilder.group({
      title :new FormControl ('', [Validators.required]),
      price : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required, Validators.minLength(10)]),
      categories : new FormControl('', [Validators.required]),
      image :new FormControl('', [Validators.required])

  })
}

  addProduct(){
    if(this.addProductForm.valid){
      this.api.postProduct(this.addProductForm.value)
      .subscribe({
        next:(res)=>{
          alert("Product Added Successfully");
          this.addProductForm.reset();
          this.route.navigate(["/products"]);


        }

      })
    }
  }


}
