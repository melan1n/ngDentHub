import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IDentist } from '../shared/interfaces/dentist';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class DentistService {

  dentists: IDentist[];
  selectedDentist: IDentist;

  constructor(private ngFirbase: AngularFirestore) {}

    //constructor (private http: HttpClient){}

  loadDentists() {
    this.ngFirbase.collection<IDentist>('dentists').valueChanges().subscribe(
      dentists => this.dentists = dentists);
      console.log(this.dentists);
    
    // return this.http.get<IDentist[]>(
    //   environment.firebase.databaseURL +'/dentists', { headers: {'Access-Control-Allow-Origin': 'denthub-19cfe.firebaseapp.com'} }).subscribe(
    //   dentists => 
    //     this.dentists = dentists
    // );
    // console.log(this.dentists);

  }
}
