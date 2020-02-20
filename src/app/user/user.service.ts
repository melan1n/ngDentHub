import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  // currentUser: { email: string; password: string } = null;

  // get isLogged() {
  //   return !!this.currentUser;
  // }

  private _isLogged = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) { 
    // const currentUser = localStorage.getItem('current-user');
    // this.currentUser = currentUser ? JSON.parse(currentUser) : null;
  }

  get isLogged(){
    return this._isLogged;
  }

  doRegister(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then((userData) => {
        this.doLogin(value);
      }, err => reject(err))
    })
  }
 
  doLogin(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then((userData) => {
        this.router.navigate(['/dentist']);
        localStorage.setItem('email', userData.user.email);
        this._isLogged = true;
      }, err => reject(err))
    })
  }

  // login(email: string, password: string) {
  //   localStorage.setItem('current-user', JSON.stringify({ email, password }));
  //   this.currentUser = { email, password };
  // }

  logout() {
    //this.currentUser = null;
    this.afAuth.auth.signOut();
    localStorage.removeItem('email');
    this._isLogged = false;
    this.router.navigate(['']);
  }
}
