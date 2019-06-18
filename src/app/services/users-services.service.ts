import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  users = [];

  constructor() {}

  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }

  validUser(name: string) {
    if (this.users.filter(user => user.name === name).length === 0) {
      return false;
    } else {
      return true;
    }
  }
}
