import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map ,catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productByCat(categorie: string) {
    return this.http.get<any>("http://localhost:3000/app/product/categories/" + categorie)
      .pipe(map((res: any) => { return res; }))
  }

  constructor(private http: HttpClient) { }
  getProduct() {
    try{
    return this.http.get<any>("https://localhost:44385/api/Products/get_all_products/")
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }catch(err){
    return throwError(()=>err);
  }}
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/app/product/add/", data)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  updateProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/app/product/update/" + id, data)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  deleteProduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/app/product/delete/" + id)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))
  }
  getProductByuserid(id: number) {
    try{
    return this.http.get<any>("http://localhost:3000/app/product/userid/" + id)
      .pipe(map((res: any) => { return res; }),
      catchError(err => {
       console.log('caught mapping error and rethrowing', err);
       return throwError(()=>err);
   }))

  }
  catch(err){
    return throwError(()=>err);
  
  }
}


}
