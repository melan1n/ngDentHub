import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup; 
  errorMessage: string;
  successMessage: string;
  emailRegex= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

  constructor(private userService: UserService) { 
      this.registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     });
    }
    
  ngOnInit(): void {
  }

  // tryRegister(value){
  //   let self = this;
  //   self.userService.doRegister(value)
  //   .then(res => {
  //     console.log(res);
  //     self.errorMessage = "";
  //     self.successMessage = "Your account has been created";
  //   }, err => {
  //     console.log(err);
  //     self.errorMessage = err.message;
  //     self.successMessage = "";
  //   })

  tryRegister(value){
    let self = this;
    self.userService.doRegister(value)
    .then(() => self.errorMessage = "Username with this email already exists");
  }
  
}
