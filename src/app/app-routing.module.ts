import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DentistComponent } from './dentist/dentist.component'
import { DetailComponent } from './detail/detail.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateComponent } from './create/create.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/guards/auth.guard'

import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: DentistComponent
  }, 
  { path: 'login', 
    component: LoginComponent, 
    //canActivate: [AuthGuard] 
},
  { path: 'register', 
    component: RegisterComponent, 
    //If set here the guard redirects to /login
    //canActivate: [AuthGuard] 
  },
   { path: 'logout', 
     component: DentistComponent,
     canActivate: [AuthGuard]  
   },
  {
  path: 'dentist',
  component: DentistComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'appointment',
    component: AppointmentComponent, 
    //canActivate: [AuthGuard] 
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
