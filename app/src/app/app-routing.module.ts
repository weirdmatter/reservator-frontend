import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListReservationsControllerComponent } from './list-reservations/controller/list-reservations.controller.component';
import { ListCollaboratorsControllerComponent } from "./list-collaborators/controller/list-collaborators.controller.component";
import {ListResourcesControllerComponent} from "./list-resources/controller/list-resources.controller.component";
import {AdminPanelControllerComponent} from "./admin-panel/controller/admin-panel.controller.component";
import {IndexComponent} from "../shared/components/index/index.component";

const routes: Routes = [
  { path: 'reservations', component: ListReservationsControllerComponent},
  { path: 'collaborators', component: ListCollaboratorsControllerComponent},
  { path: 'resources', component: ListResourcesControllerComponent},
  { path: 'admin', component: AdminPanelControllerComponent},
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
