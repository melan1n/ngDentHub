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

  constructor(
    private userService: UserService
    ) { 
      this.registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     });
    }

    
  ngOnInit(): void {
  }

  tryRegister(value){
    this.userService.doRegister(value)
    .then(res => {
      console.log(res);
      this.errorMessage = "";
      this.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = "";
    })
  }
  
}
