import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products:any
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.products= this.apiService.getProduct()
  }

  addtoCart(index:number){
    this.apiService.addToCart(index)
  }

}
