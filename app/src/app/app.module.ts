import { BrowserModule }                          from '@angular/platform-browser';
import { NgModule }                               from '@angular/core';

import { AppRoutingModule }                       from './app-routing.module';
import { AppComponent }                           from './app.component';
import { BrowserAnimationsModule }                from '@angular/platform-browser/animations';
import { HttpClientModule }                       from '@angular/common/http';
import { NavComponent }                           from '../shared/components/nav/nav.component';
import { MatSidenavModule }                       from '@angular/material/sidenav';
import { MatToolbarModule }                       from '@angular/material/toolbar';
import { MatIconModule }                          from '@angular/material/icon';
import { MatListModule }                          from '@angular/material/list';
import { MatFormFieldModule }                     from '@angular/material/form-field';
import { ListingComponent }                       from "../shared/components/listing/presenter/listing.component";
import { ReactiveFormsModule }                    from "@angular/forms";
import { MatInputModule }                         from "@angular/material/input";
import { MatButtonModule }                        from "@angular/material/button";
import { ReservationCardPresenterComponent }      from "../shared/components/reservation-card/presenter/reservation-card.presenter.component";
import { ReservationCardControllerComponent }     from "../shared/components/reservation-card/controller/reservation-card.controller.component";
import { ListReservationsControllerComponent }    from './list-reservations/controller/list-reservations.controller.component';
import { ListCollaboratorsControllerComponent }   from './list-collaborators/controller/list-collaborators.controller.component';
import { ListResourcesControllerComponent }       from './list-resources/controller/list-resources.controller.component';
import { AdminPanelPresenterComponent }           from './admin-panel/presenter/admin-panel.presenter.component';
import { AdminPanelControllerComponent }          from './admin-panel/controller/admin-panel.controller.component';
import { NewReservationPresenterComponent }       from './new-reservation/presenter/new-reservation.presenter.component';
import { NewReservationControllerComponent }      from './new-reservation/controller/new-reservation.controller.component';
import { MatDatepickerModule }                    from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE }   from '@angular/material/core';
import {CollaboratorCardComponent}                from "../shared/components/collaborator-card/collaborator-card.component";
import {ResourceCardComponent}                    from "../shared/components/resource-card/resource-card.component";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListingComponent,
    ReservationCardPresenterComponent,
    ReservationCardControllerComponent,
    CollaboratorCardComponent,
    ResourceCardComponent,
    ListReservationsControllerComponent,
    ListCollaboratorsControllerComponent,
    ListResourcesControllerComponent,
    NewReservationPresenterComponent,
    NewReservationControllerComponent,
    AdminPanelPresenterComponent,
    AdminPanelControllerComponent
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
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
