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

  constructor(private userService: UserService) { 
      this.registerForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
     });
    }

    
  ngOnInit(): void {
  }

  tryRegister(value){
    let self = this;
    self.userService.doRegister(value)
    .then(res => {
      console.log(res);
      self.errorMessage = "";
      self.successMessage = "Your account has been created";
    }, err => {
      console.log(err);
      self.errorMessage = err.message;
      self.successMessage = "";
    })
  }
  
}
