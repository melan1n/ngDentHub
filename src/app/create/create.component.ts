import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { AppointmentService } from '../appointment/appointment.service';
import { IDentist } from '../shared/interfaces/dentist';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements AfterViewInit {
  @ViewChild('createForm') form: NgForm;
  @Input() dentist: IDentist;
  
  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.form);
  }

  OnSubmit(){
    this.bookAppointmentHandler(this.dentist, this.form.value);
  }

  bookAppointmentHandler(dentist: IDentist, formValue: FormData){
    //add email of logged user
    this.appointmentService.createAppointment(
     {dentist: dentist.name, time: new Date(formValue['time']), email: localStorage.email});
  }
}
