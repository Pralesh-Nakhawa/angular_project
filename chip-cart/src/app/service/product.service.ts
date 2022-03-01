import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  apiUrl="https://localhost:44385/api/Products/";
  productByCat(categorie: string) {
    return this.http.get<any>(this.apiUrl+"get_product_by_category/" + categorie)
      .pipe(map((res: any) => { return res; }))
  }

  constructor(private http: HttpClient,) { }
  getProduct() {
   
    return this.http.get<any>(this.apiUrl+"get_all_products/")
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  postProduct(data: any) {
    return this.http.post<any>(this.apiUrl+"addProduct/", data)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  updateProduct(data: any, id: number) {
    return this.http.put<any>(this.apiUrl+"updateProduct/" + id, data)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  deleteProduct(id: number) {
    return this.http.delete<any>(this.apiUrl+"deleteProduct/" + id)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  getProductByuserid(id: number) {
    try{
    return this.http.get<any>(this.apiUrl+"get_product_by_userid/" + id)
      .pipe(map((res: any) => { return res.productDetails; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  catch(err){
    return throwError(()=>err);
  
  }
}
getProductbySearch(title:string){
  return this.http.get<any>(this.apiUrl+"SearchProduct/" + title)
  .pipe(map((res: any) => { return res; }))
}


}
