import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SuccessComponent } from './components/success/success.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,title:"Home | Jinja Art Studio"},
  { path: 'shop', component: ProductsComponent,title:"Shop | Jinja Art Studio" },
  { path: 'product', component: ProductComponent,title:"Product | Jinja Art Studio" },
  { path: 'cart', component: CartComponent ,title:"Cart | Jinja Art Studio"},
  { path: 'checkout', component: CheckoutComponent,title:"Checkout | Jinja Art Studio" },
  { path: 'success', component: SuccessComponent,title:"Success | Jinja Art Studio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
