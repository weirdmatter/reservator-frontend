import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { NewReservationConfig } from 'src/shared/interfaces/new-reservation-config.interface';
import { Collaborator } from 'src/shared/interfaces/collaborator.interface';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Resource } from 'src/shared/interfaces/resource.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ui-new-reservation',
  templateUrl: './new-reservation.presenter.component.html',
  styleUrls: ['./new-reservation.presenter.component.sass'],
  providers: [DatePipe]
})
export class NewReservationPresenterComponent implements OnInit {

  @Input() data                     : NewReservationConfig;
  @Output('close') onCancelClicked  : EventEmitter<void>;
  @Output('save') onSaveClicked     : EventEmitter<any>;
  form                              : FormGroup;
  filteredCollaborators             : Collaborator[];
  filteredResources                 : Resource[];
  currentDate                       : Date;

  constructor(private fb: FormBuilder, private datePipe : DatePipe) {
    this.onCancelClicked  = new EventEmitter<void>();
    this.onSaveClicked    = new EventEmitter<any>();
    this.currentDate      = new Date();
  }

  get controls() { return this.form.controls }
  get resources() { return this.controls.resources as FormArray };

  ngOnInit(): void {
    this.form = this.fb.group({
      collaborator    : ['', Validators.required],
      resources       : new FormArray([], Validators.required)
    });
    this.filteredCollaborators = this.data.collaborators;
    this.filteredResources     = this.data.resources;
  }

  filter(value : string, type : string) {
    const filterValue             = value.toLowerCase();
    if (type === 'C') {
      this.filteredCollaborators  = this.data.collaborators.filter((collab : Collaborator) => collab.name.toLowerCase().includes(filterValue));
    }
    else {
      this.filteredResources      = this.data.resources.filter((res : Resource) => res.name.toLowerCase().includes(filterValue));
    }
  }

  onResourceSelected() {
    this.resources.push(this.fb.group({
      resource  : [null, [Validators.required]],
      amount    : [null, [Validators.required]],
      beginDate : [null, Validators.required],
      endDate   : [null, Validators.required]
    }));
  }

  onDeleteResource(resource) {
    this.resources.controls.findIndex((control: AbstractControl) => {

    });
  }

  close() {
    this.onCancelClicked.emit();
  }

  save() {
    this.onSaveClicked.emit(this.form);
  }

}
