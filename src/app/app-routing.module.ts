import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductDetailesComponent } from './products/product-detailes/product-detailes.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { CartComponent } from './auth/cart/cart.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailesComponent,
  },
  {
    path: 'register',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: SignInComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
