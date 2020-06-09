import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AdminConfig} from "../../../shared/interfaces/admin-config.interface";

@Component({
  selector: 'app-ui-admin-panel',
  templateUrl: './admin-panel.presenter.component.html',
  styleUrls: ['./admin-panel.presenter.component.sass']
})
export class AdminPanelPresenterComponent implements OnInit {

  @Input()  data      : AdminConfig;
  @Output() modify    : EventEmitter<FormGroup>;
  form                : FormGroup;

  constructor(private fb : FormBuilder) { this.modify = new EventEmitter<FormGroup>(); }

  ngOnInit(): void {
    this.form = this.fb.group({
      meter_price: [null],
      seat_price: [null]
    })
  }

  modifyAdminConfig() {
    this.modify.emit(this.form);
  }

}
