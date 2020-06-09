import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent }       from "../shared/components/listing/presenter/listing.component";
import { ListReservationsControllerComponent } from './list-reservations/controller/list-reservations.controller.component';
import { ListCollaboratorsControllerComponent } from "./list-collaborators/controller/list-collaborators.controller.component";
import {ListResourcesControllerComponent} from "./list-resources/controller/list-resources.controller.component";

const routes: Routes = [
  { path: 'reservations', component: ListReservationsControllerComponent},
  { path: 'collaborators', component: ListCollaboratorsControllerComponent},
  { path: 'resources', component: ListResourcesControllerComponent},
  { path: 'admin', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
