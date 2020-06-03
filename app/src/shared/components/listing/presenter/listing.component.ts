import {Component, Input, OnInit} from '@angular/core';
import {ListingConfig} from "../../../interfaces/listing-config.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ui-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.sass']
})
export class ListingComponent implements OnInit {

  @Input() config: ListingConfig
  form : FormGroup

  constructor(private fb : FormBuilder) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      initialDate: ['', Validators.required],
      finalDate: ['', Validators.required]
    })
  }
}
