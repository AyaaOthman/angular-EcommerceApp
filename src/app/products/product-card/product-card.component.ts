import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';
import data from '../../../assets/products-list.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Product;
  constructor(private router: Router) {}
  rediredctToProductDetails(id: string) {
    this.router.navigate(['product-details', id]);
  }
}
