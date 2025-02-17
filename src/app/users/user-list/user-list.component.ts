import { Component } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = USERS;

  constructor(private dataService: DataService) {}

  addUserToFavorites(user: any) {
    this.dataService.addToFavorites(user);
    console.log('User added to favorites:', user);
  }

  getFavorites() {
    return this.dataService.getFavorites();
  }
}
