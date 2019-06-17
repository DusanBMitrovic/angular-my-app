import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  regForm = this.fb.group({
    name: ['', Validators.required],
    number: ['', Validators.required]
  });


  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private userService: UsersServicesService) { }

  ngOnInit() {
  }

  onSubmit() {
    const newUser = {name: this.regForm.get('name').value, number: this.regForm.get('number').value};
    this.userService.addUser(newUser);
    console.log(this.userService.getUsers());
  }

}
