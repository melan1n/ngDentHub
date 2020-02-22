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
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    component: HomeComponent
    //component: DentistComponent
  }, 
  { path: 'login', 
    component: LoginComponent, 
  },
  { path: 'register', 
    component: RegisterComponent, 
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
  },
  { path: '**', 
  component: PageNotFoundComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
