import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DentistComponent } from './dentist/dentist.component';

import { HttpClientModule} from '@angular/common/http';
import { DentistService } from './dentist/dentist.service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DetailComponent } from './detail/detail.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DentistComponent,
    DetailComponent,
    AppointmentComponent,
    CreateComponent,
    LoginComponent,
    RegisterComponent,
    NavigationComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ DentistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
