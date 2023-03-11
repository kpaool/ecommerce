import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  products =[
    {
      image:"assets/images/products/1 (1).jpeg",
      name:"Family reunion",
      price:940
    },
    {
      image:"assets/images/products/1 (1).jpg",
      name:"Africa lion",
      price:400
    },
    {
      image:"assets/images/products/1 (2).jpeg",
      name:"The giant",
      price:870
    },
    {
      image:"assets/images/products/1 (2).jpg",
      name:"Home",
      price:420
    },
    {
      image:"assets/images/products/1 (3).jpeg",
      name:"The safari",
      price:910
    },
    {
      image:"assets/images/products/1 (3).jpg",
      name:"The ghetto",
      price:230
    },
    {
      image:"assets/images/products/1 (4).jpeg",
      name:"Buff",
      price:590
    },
    {
      image:"assets/images/products/1 (5).jpeg",
      name:"Chase me",
      price:600
    },
    {
      image:"assets/images/products/1 (5).jpg",
      name:"The giant",
      price:650
    },
    {
      image:"assets/images/products/1 (6).jpeg",
      name:"Ohh deary!",
      price:490
    },
    {
      image:"assets/images/products/1 (7).jpeg",
      name:"Back home",
      price:870
    },
    {
      image:"assets/images/products/1 (8).jpeg",
      name:"Fierce",
      price:250
    },
    {
      image:"assets/images/products/1 (9).jpeg",
      name:"Kampala",
      price:481
    },
    {
      image:"assets/images/products/1 (10).jpeg",
      name:"Flamingo",
      price:550
    },
    {
      image:"assets/images/products/1 (11).jpeg",
      name:"Early morning",
      price:600
    },
    {
      image:"assets/images/products/1 (12).jpeg",
      name:"Into the distance",
      price:780
    },
    {
      image:"assets/images/products/1 (13).jpeg",
      name:"The spirit",
      price:490
    },
    {
      image:"assets/images/products/1 (14).jpeg",
      name:"Our fight",
      price:600
    },
    {
      image:"assets/images/products/1 (15).jpeg",
      name:"Wash away",
      price:490
    },
    {
      image:"assets/images/products/1 (16).jpeg",
      name:"Slight light",
      price:490
    },
    {
      image:"assets/images/products/1 (17).jpeg",
      name:"Freezing birds",
      price:780
    },
    {
      image:"assets/images/products/pen.webp",
      name:"Stylish pen",
      price:1
    }
  ]
  constructor(private router:Router) { }

  getProduct(){
    return this.products
  }

  addToCart(index:number){
    let cart =[]
    if(localStorage.getItem("cart")){
      cart = JSON.parse(localStorage.getItem('cart')!)
    }
    cart.push(this.products[index]);
    this.router.navigate(["cart"])
    localStorage.setItem("cart",JSON.stringify(cart))
  }

  getCart(){
    let cart:any =[]
    if(localStorage.getItem("cart")){
      cart = JSON.parse(localStorage.getItem('cart')!)
    }
    return cart
  }

  removeFromCart(index:number){
    let cart = this.getCart()
    cart.splice(index, 1);
    localStorage.setItem("cart",JSON.stringify(cart))
  }

  getCartTotal(){
    let cart = this.getCart()
    let sum =0
    for(let product of cart){
      sum+=product.price
    }
    return sum
  }
}
