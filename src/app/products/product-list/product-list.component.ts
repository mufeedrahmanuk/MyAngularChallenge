import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service'; // Import the DataService
import { PRODUCTS } from '../mock-products'; // Import the mock products

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = PRODUCTS; // Fetch and assign mock products

  constructor(private dataService: DataService) {}

  addProductToFavorites(product: any) {
    this.dataService.addToFavorites(product);
    console.log('Product added to favorites:', product);
  }

  getFavorites() {
    return this.dataService.getFavorites();
  }
}
