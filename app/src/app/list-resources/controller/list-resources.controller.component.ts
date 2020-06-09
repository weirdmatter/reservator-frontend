import { Component, OnInit } from '@angular/core';
import {ListingConfig} from "../../../shared/interfaces/listing-config.interface";
import {ResourceService} from "../../../shared/services/resources/resource.service";

@Component({
  selector: 'app-list-resources',
  templateUrl: './list-resources.controller.component.html',
  styleUrls: ['./list-resources.controller.component.sass']
})
export class ListResourcesControllerComponent implements OnInit {

  resourceListingConfig : ListingConfig;

  constructor(private resources: ResourceService) { }

  ngOnInit(): void {
    this.buildResourceListingConfig();
  }

  private async buildResourceListingConfig() {

    const resources = await this.resources.getResources();

    this.resourceListingConfig = {
      title     : 'Recursos',
      subtitle  : 'Selecione uma data de início e uma data de término para pesquisar por recursos entre estes períodos de tempo.',
      hasFilter : true,
      hasAction : false,
      data      : resources,
      cardType  : 'RESOURCE'
    }
  }

  async searchResources(data: object) {
    this.resourceListingConfig.data = await this.resources.getResourcesTotalCost(data["start"], data["end"]);
  }
}
