import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DentistComponent } from './dentist/dentist.component'
import { DetailComponent } from './detail/detail.component';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
   {
  path: 'dentist',
  component: DentistComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
