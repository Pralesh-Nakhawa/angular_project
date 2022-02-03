import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public orderList:any
displayedColumns: string[] = ['date','position'];
  constructor(private orderapi:OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.orderapi.getOrder()
    .subscribe((res:any)=>{
      this.orderList=res;
    })
  }
}
