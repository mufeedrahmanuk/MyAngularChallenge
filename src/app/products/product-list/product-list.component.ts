import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = PRODUCTS;

  constructor(private dataService: DataService) {}

  addProductToFavorites(product: any) {
    this.dataService.addToFavorites(product);
    console.log('Product added to favorites:', product);
  }

  getFavorites() {
    return this.dataService.getFavorites();
  }
}
