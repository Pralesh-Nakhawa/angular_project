import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  getOrder() {
    return this.http.get<any>("https://localhost:44385/api/Order/get_all_orders/")
      .pipe(map((res: any) => { return res; }),
       catchError(err => {
        console.log('caught mapping error and rethrowing', err);
        return throwError(()=>err);
    }))
  }

  getOrderById(id:any){
    return this.http.get<any>("https://localhost:44385/api/Order/get_orders_by_id/"+id)
      .pipe(map((res: any) => { return res; }))
  }
  postOrder(data: any) {
    return this.http.post<any>("https://localhost:44385/api/Order/place_order/", data)
      .pipe(map((res: any) => { return res; })) 
  }
 deleteOrder(id:any){
   return this.http.delete<any>("https://localhost:44385/api/Order/cancel_order/"+id)
   .pipe(map((res:any)=>{return res;}))
 } 
}
