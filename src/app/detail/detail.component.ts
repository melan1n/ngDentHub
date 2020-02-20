import { Component, OnInit } from '@angular/core';
import { DentistService } from '../dentist/dentist.service';
import { IDentist } from '../shared/interfaces/dentist';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dentist: IDentist; 
    
  constructor(
    private dentistService: DentistService,
    private route:ActivatedRoute) {
      this.route.params.subscribe(params => {
        this.dentistService.
        getById(params['id'])
        .subscribe(d => {
          this.dentist = d;
        });
      })

     }    

     bookAppointmentHandler(){}
  // get selectedDentist() {
  //   return  this.dentistService.selectedDentist;
  // }

  // getDentist (id: number) {
  //    this.dentistService.getById(id).subscribe(d => {
  //     this.dentist = d as IDentist;
  //   })
  // }

  ngOnInit(): void {
    
  }

}
