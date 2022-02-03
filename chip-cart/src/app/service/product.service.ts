import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    return this.http.get<any>("http://localhost:3000/app/product/")
      .pipe(map((res: any) => { return res; }))
  }
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/app/product/add/", data)
      .pipe(map((res: any) => { return res; }))
  }
  updateProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/app/product/update/" + id, data)
      .pipe(map((res: any) => { return res; }))
  }
  deleteProduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/app/product/delete/" + id)
      .pipe(map((res: any) => { return res; }))
  }
  getProductByuserid(id: number) {
    return this.http.get<any>("http://localhost:3000/app/product/userid/" + id)
      .pipe(map((res: any) => { return res; }))

  }

}
