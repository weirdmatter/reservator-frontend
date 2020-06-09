import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AdminService} from "../../../shared/services/admin/admin.service";
import {AdminConfig} from "../../../shared/interfaces/admin-config.interface";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.controller.component.html',
  styleUrls: ['./admin-panel.controller.component.sass']
})
export class AdminPanelControllerComponent implements OnInit {

  actualConfig : AdminConfig;

  constructor(private adminService : AdminService) { }

  ngOnInit(): void { this.buildAdminConfig() }

  async buildAdminConfig() {
    const config = await this.adminService.getAdminConfig();

    this.actualConfig = {
      meter_price : config.meter_price,
      seat_price  : config.seat_price
    }
  }

  async modifyAdminConfig(data : FormGroup) {
    const configAdminData = {
      meter_price : data.get('meter_price').value,
      seat_price  : data.get('seat_price').value
    }
    await this.adminService.setAdminConfig(configAdminData);
  }

}
