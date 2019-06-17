import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {
  users = [];


  constructor() { }

  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
