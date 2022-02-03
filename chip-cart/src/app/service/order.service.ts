import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getOrder() {
    return this.http.get<any>("http://localhost:3000/app/order/")
      .pipe(map((res: any) => { return res; }))
  }
  getOrderDetail() {
    return this.http.get<any>("http://localhost:3000/app/order-detail/")
      .pipe(map((res: any) => { return res; }))
  }
  postOrderDetail(data: any) {
    return this.http.post<any>("http://localhost:3000/app/order-detail/add/", data)
      .pipe(map((res: any) => { return res; }))
  }
  postOrder(data: any) {
    return this.http.post<any>("http://localhost:3000/app/order/add/", data)
      .pipe(map((res: any) => { return res; }))
  }
}
