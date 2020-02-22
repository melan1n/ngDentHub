import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _isLogged = false;
  public currentUserEmail: string;
  isLoggedChanged = new Subject<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) { 
    
  }

  get isLogged(){
    return this._isLogged;
  }

  initializeUserState() {
    //let self = this;
    this.afAuth.authState.subscribe((userState) => {
      if(userState) {
        this._isLogged = true;
        this.isLoggedChanged.next(true);
      } else {
        this._isLogged = false;
        this.isLoggedChanged.next(false);
      }
    });
  }

  doRegister(value){
    //let self = this;
     return this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
         .then((userData) => {
          this.doLogin(value)
      }).catch((error) => {
        console.log(error);
    });
  }

  doLogin(value){
    return this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
      .then((userData) => {
        this.router.navigate([ 'dentist' ]);
        this.currentUserEmail = value.email;
        this._isLogged = true;
        localStorage.setItem('email', userData.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
}

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem('email');
    this.currentUserEmail = '';
    this._isLogged = false;
    this.router.navigate(['']);
  }
}
