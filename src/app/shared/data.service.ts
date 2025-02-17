import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private favorites: any[] = [];

  constructor() { }

  addToFavorites(item: any) {
    this.favorites.push(item);
  }

  getFavorites() {
    return this.favorites;
  }
}
