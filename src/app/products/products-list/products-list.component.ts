import { Component } from '@angular/core';
import data from '../../../assets/products-list.json';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products: Array<Product> = data;
}
