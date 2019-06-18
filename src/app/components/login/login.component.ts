import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    name: ['']
  });

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private userService: UsersServicesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.userService.validUser(this.loginForm.get('name').value));
  }
}
