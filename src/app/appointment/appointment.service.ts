import { Injectable } from '@angular/core';
import { IAppointment } from '../shared/interfaces/appointment';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments: IAppointment[];
  

  constructor(
    private ngFirbase: AngularFirestore,
    private router: Router
    ) { }

  loadAppointments() {
    // this.ngFirbase.collection<IAppointment>('appointments').
    //   valueChanges().subscribe(
    //   appointments => this.appointments = appointments);
    this.ngFirbase.collection<IAppointment>('appointments', a => a.where('email', '==', localStorage.email ))
      .valueChanges().subscribe(
      appointments => this.appointments = appointments);
  }

  createAppointment(appointment){
     this.ngFirbase.collection('appointments').add(appointment).
      then(() => this.router.navigate(['appointment']));
  }
}
