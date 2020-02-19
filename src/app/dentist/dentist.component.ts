import { Component, OnInit } from '@angular/core';
import { DentistService } from './dentist.service';
import { IDentist } from '../shared/interfaces/dentist';


@Component({
  selector: 'app-dentist',
  templateUrl: './dentist.component.html',
  styleUrls: ['./dentist.component.scss']
})
export class DentistComponent implements OnInit {

  get dentists() {
    return this.dentistService.dentists;
  }
  constructor(private dentistService: DentistService) { }

  ngOnInit(): void {
    this.dentistService.loadDentists();
  }

  selectDentistHandler(dentist: IDentist) {
    this.dentistService.selectedDentist = dentist;
  }
}
