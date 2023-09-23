import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import data from '../../../assets/products-list.json';

@Component({
  selector: 'app-product-detailes',
  templateUrl: './product-detailes.component.html',
  styleUrls: ['./product-detailes.component.css'],
})
export class ProductDetailesComponent {
  activeId!: number;
  products: Product[] = data;
  constructor(private activeRoute: ActivatedRoute) {
    console.log(this.activeRoute.snapshot.params['id']);
    this.activeId = this.activeRoute.snapshot.params['id'];
    this.products.find((product) => product.id === this.activeId);
    console.log(this.products.find((product) => product.id === this.activeId));
  }
}
