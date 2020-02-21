import { Component, OnInit } from '@angular/core';
import { AppointmentService } from './appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  get appointments() {
    
    return this.appointmentService.appointments;
  }
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.loadAppointments();
  }

}
