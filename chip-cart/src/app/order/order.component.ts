import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public orderList:any
public orderedProducts:any[]=[];
displayedColumns: string[] = ['position','date','productName','quantity','totalPrice','cancelOrder'];//,'deliveryDate'
  constructor(private orderapi:OrderService) { }

  ngOnInit(): void {
    this.getOrders();
    
    
  }

  getOrders(){
    const userIdDetail = parseInt(localStorage.getItem('token') as string)
    this.orderapi.getOrderById(userIdDetail)
    .subscribe((res:any)=>{
      this.orderList=res.orderDetails;
     
    })
  }
  DeleteOrder(order:any){
    var orderid=order.id;
    this.orderapi.deleteOrder(orderid)
    .subscribe((res:any)=>{
      alert("Order Cancelled");
      this.getOrders();
    })
  }
  
}
