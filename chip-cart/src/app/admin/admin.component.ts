import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
// import { Products } from '../product/Iproduct';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  addProductForm !:FormGroup;
  // productModel: produ =new product() ;
  // hide = true;
  // initForm(){
  //   this.addProductForm=new FormGroup({
  //     title : 1'', [Validators.required]),
  //     price : 1'', [Validators.required]),
  //     description : 1'', [Validators.required]),
  //     categories : 1'', [Validators.required,Validators.minLength(10)]),
  //     image : 1),

  //   })
  // }
  public product : any;
  constructor(private formBuilder : FormBuilder , private api:ProductService, private route:Router) { }

  ngOnInit(): void {



  this.addProductForm=this.formBuilder.group({
    title :new FormControl ('', [Validators.required]),
    price : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required, Validators.minLength(20)]),
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
