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
  activeId!: string;
  products: Product[] = data;
  selectedProduct!: Product;
  selectedProductImages!: string[];
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activeId = this.activeRoute.snapshot.params['id'];
    this.selectedProduct = this.products.find(
      (product) => product.id === this.activeId
    ) as Product;
    this.selectedProductImages = this.selectedProduct.images;
  }
}
