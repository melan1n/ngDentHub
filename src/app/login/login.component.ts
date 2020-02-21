import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup; 
  errorMessage: string;
  successMessage: string;
  
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
    // .then(res => {
    //   debugger;
    //   console.log(res);
    //   this.errorMessage = "";
    //   this.successMessage = "You have been logged in";
    // }, err => {
    //   console.log(err);
    //   this.errorMessage = err.message;
    //   this.successMessage = "";
    // })
  }
}
