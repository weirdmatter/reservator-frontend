import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingComponent}       from "../shared/components/listing/presenter/listing.component";
import { ListReservationsControllerComponent } from './list-reservations/controller/list-reservations.controller.component';


const routes: Routes = [
  { path: 'reservations', component: ListReservationsControllerComponent},
  { path: 'collaborators', component: ListingComponent},
  { path: 'resources', component: ListingComponent},
  { path: 'admin', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
