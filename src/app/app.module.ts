import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { NavbarComponent } from './common/navbar/navbar.component';
import { MaincheckinComponent } from './components/maincheckin/maincheckin.component';
import { RegisterComponent } from './reservationcomponents/register/register.component';
import { LoginComponent } from './reservationcomponents/login/login.component';
import { ReservationConfirmComponent } from './reservationcomponents/reservation-confirm/reservation-confirm.component';
import { FindFlightsComponent } from './reservationcomponents/find-flights/find-flights.component';
import { AddFlightsComponent } from './reservationcomponents/add-flights/add-flights.component';
import { CompleteReservationComponent } from './reservationcomponents/complete-reservation/complete-reservation.component';
import { DisplayFlightsComponent } from './reservationcomponents/display-flights/display-flights.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { ResdataService } from './services/resdata.service';

@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmcheckinComponent,
    NavbarComponent,
    MaincheckinComponent,
    RegisterComponent,
    LoginComponent,
    ReservationConfirmComponent,
    FindFlightsComponent,
    AddFlightsComponent,
    CompleteReservationComponent,
    DisplayFlightsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,ResdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
