import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart:any=[]
  total=0
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.cart=this.apiService.getCart()
    this.total= this.apiService.getCartTotal()
  }

  removeFromCart(index:number){
    this.cart=this.apiService.removeFromCart(index)
    this.cart=this.apiService.getCart()
    this.total= this.apiService.getCartTotal()
  }
}
