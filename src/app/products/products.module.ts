import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [ProductsListComponent, ProductDetailesComponent, ProductCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductsListComponent, ProductDetailesComponent],
})
export class ProductsModule {}
