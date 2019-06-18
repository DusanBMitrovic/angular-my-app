import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  openRegister() {
    this.modalService.open(RegisterComponent);
  }

  openLogin() {
    this.modalService.open(LoginComponent);
  }

  ngOnInit() {}
}
