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

  dateRegex= /^([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))-\d\d\d\d (?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)$/g;

  
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
    this.appointmentService.createAppointment(
     {dentist: dentist.name, time: new Date(formValue['time']), email: localStorage.email});
  }
}
