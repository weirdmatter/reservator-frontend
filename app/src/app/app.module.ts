import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';

import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { HttpClientModule }         from '@angular/common/http';
import { NavComponent }             from '../shared/components/nav/nav.component';
import { MatSidenavModule }         from '@angular/material/sidenav';
import { MatToolbarModule }         from '@angular/material/toolbar';
import { MatIconModule }            from '@angular/material/icon';
import { MatListModule }            from '@angular/material/list';
import {MatFormFieldModule}         from '@angular/material/form-field';
import {ListingComponent}           from "../shared/components/listing/presenter/listing.component";
import {ReactiveFormsModule}        from "@angular/forms";
import {MatInputModule}             from "@angular/material/input";
import {MatButtonModule}            from "@angular/material/button";
import {ReservationCardComponent} from "../shared/components/reservation-card/presenter/reservation-card.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListingComponent,
    ReservationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
