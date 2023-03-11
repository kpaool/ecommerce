import { Component, OnInit } from '@angular/core';
import { Flutterwave, InlinePaymentOptions, PaymentSuccessResponse } from 'flutterwave-angular-v3';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart:any=[]
  checkoutForm: FormGroup;
  total=0
  publicKey = "FLWPUBK-31380daedfccc40892aff0766bc8052e-X";

  
  customizations = {
    title: "Jinja Art Studio",
    description: "Welcome to the home beautifully handcrafted piece of art",
    logo: "https://flutterwave.com/images/logo-colored.svg",
  };

  meta = { counsumer_id: "7898", consumer_mac: "kjs9s8ss7dd" };

  
  //Inject the flutterwave service
  constructor(private flutterwave: Flutterwave,private apiService:ApiService,private router:Router) {
    this.checkoutForm = new FormGroup({
      firstname:new FormControl("",Validators.required),
      lastname:new FormControl("",Validators.required),
      address:new FormControl(""),
      apartment:new FormControl(""),
      posta:new FormControl(""),
      email:new FormControl("",[Validators.required,Validators.email]),
      phonenumber:new FormControl("",Validators.required),
      ordernotes:new FormControl(""),
      country:new FormControl("UG",Validators.required),
    });
  }

  
  makePayment() {
    let data = this.checkoutForm.value;
    let customerDetails = {
      name: data.firstname+ " "+data.lastname,
      email: data.email,
      phone_number: data.phonenumber,
    };
  
    console.log(customerDetails)
    let paymentData: InlinePaymentOptions = {
      public_key: this.publicKey,
      tx_ref: new Date().getTime().toString(),
      amount: this.total,
      currency: "USD",
      payment_options: "card,ussd",
      redirect_url: "",
      meta: this.meta,
      customer: customerDetails,
      customizations: this.customizations,
      callback: this.makePaymentCallback,
      onclose: this.closedPaymentModal,
      callbackContext: this,
    };
    this.flutterwave.inlinePay(paymentData);
  }
  makePaymentCallback(response: PaymentSuccessResponse): void {
    console.log("Payment callback", response);
    if(response.status=="successful"){
      setTimeout(()=>{
        window.location.href = "/success";
      },3000);
    }
  }
  closedPaymentModal(): void {
    console.log("payment is closed");
  }


  onSubmit(){
    this.makePayment()
  }

  ngOnInit(): void {
    this.cart=this.apiService.getCart()
    this.total=this.apiService.getCartTotal()
  }

}
