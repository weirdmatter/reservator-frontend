import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ListingConfig} from "../../../interfaces/listing-config.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DatePipe } from '@angular/common';
import { Reservation } from 'src/shared/interfaces/reservation.interface';
import { Collaborator } from 'src/shared/interfaces/collaborator.interface';
import { Resource } from 'src/shared/interfaces/resource.interface';
import {CollaboratorCost} from "../../../interfaces/collaborator-cost.interface";

@Component({
  selector: 'app-ui-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass'],
  providers: [DatePipe] //DatePipe como provider
})
export class ListingComponent implements OnInit {

  @Input() config   : ListingConfig
  @Output() search  : EventEmitter<object> = new EventEmitter<object>();
  @Output() action  : EventEmitter<void> = new EventEmitter<void>();
  form              : FormGroup
  filteredItems     : Reservation[] | Collaborator[] | CollaboratorCost[] | Resource[] = [];

  constructor(private fb : FormBuilder, private datePipe: DatePipe) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      initialDate : [null],
      finalDate   : [null]
    });
  }

  onDateChanged() {
    if (!this.datesAreValid()) return;
    this.search.emit({
      start : this.datePipe.transform(this.form.get('initialDate').value, 'dd/MM/yyyy'),
      end   : this.datePipe.transform(this.form.get('finalDate').value, 'dd/MM/yyyy')
    });
  }

  private datesAreValid() : boolean {
    const initialDate = this.datePipe.transform(this.form.get('initialDate').value, 'dd/MM/yyyy');
    const finalDate   = this.datePipe.transform(this.form.get('finalDate').value, 'dd/MM/yyyy');
    return initialDate !== null && finalDate !== null;
  }

}
