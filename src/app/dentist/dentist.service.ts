import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IDentist } from '../shared/interfaces/dentist';

import { AngularFirestore } from '@angular/fire/firestore';
import { Identifiers } from '@angular/compiler';
import { Observable } from 'rxjs';

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
  }

  getById (id: number) {
    return this.ngFirbase.collection('dentists').
      doc(id.toString()).
      valueChanges();
      }
}
