import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListingComponent} from "../shared/components/listing/presenter/listing.component";


const routes: Routes = [
  { path: 'reservations', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
