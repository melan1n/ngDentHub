import { Component, OnInit, Input } from '@angular/core';
import { AppointmentService } from '../appointment/appointment.service';
import { IDentist } from '../shared/interfaces/dentist';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() dentist: IDentist;
  
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  bookAppointmentHandler(dentist: IDentist){
    //add createAppointment in appointment.service
    debugger;
    this.appointmentService.createAppointment(
      
      {dentist: dentist.name, date: new Date(Date.now())});
  }
}
