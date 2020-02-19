import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DentistComponent } from './dentist/dentist.component'


const routes: Routes = [
   {
  path: 'dentist',
  component: DentistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
