import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormGroup, FormsModule, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; 
  errorMessage: string;
  successMessage: string;
  emailRegex= /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
  
  constructor(
    private userService: UserService
    ) { 
      this.loginForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     });
    }

  ngOnInit(): void {
  }

  // tryLogin(value){
  //   this.userService.doLogin(value)
  //   .then(res => {
  //     debugger;
  //     console.log(res);
  //     this.errorMessage = "";
  //     this.successMessage = "You have been logged in";
  //   }, err => {
  //     console.log(err);
  //     this.errorMessage = err.message;
  //     this.successMessage = "";
  //   })
  // }

  tryLogin(value){
    this.userService.doLogin(value)
    .then(() => this.errorMessage = "Please input valid credentials.");
  }
}
