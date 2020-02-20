import { Injectable } from '@angular/core';
import { IAppointment } from '../shared/interfaces/appointment';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments: IAppointment[];
  

  constructor(private ngFirbase: AngularFirestore) { }

  loadAppointments() {
    this.ngFirbase.collection<IAppointment>('appointments').valueChanges().subscribe(
      appointments => this.appointments = appointments);
  }

  createAppointment(appointment){
     this.ngFirbase.collection('appointments').add(appointment);
  }
}
