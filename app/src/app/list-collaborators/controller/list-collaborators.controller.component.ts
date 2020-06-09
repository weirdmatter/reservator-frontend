import { Component, OnInit } from '@angular/core';
import {ListingConfig} from "../../../shared/interfaces/listing-config.interface";
import {CollaboratorService} from "../../../shared/services/collaborators/collaborator.service";

@Component({
  selector: 'app-list-collaborators',
  templateUrl: './list-collaborators.controller.component.html',
  styleUrls: ['./list-collaborators.controller.component.sass']
})
export class ListCollaboratorsControllerComponent implements OnInit {

  collaboratorListingConfig : ListingConfig;

  constructor(private collaborators: CollaboratorService) { }

  ngOnInit(): void {
    this.buildCollaboratorListingConfig();
  }

  private async buildCollaboratorListingConfig() {

    const collaborators = await this.collaborators.getCollaborators();

    this.collaboratorListingConfig = {
      title     : 'Colaboradores',
      subtitle  : 'Selecione uma data de início e uma data de término para pesquisar por colaboradores entre estes períodos de tempo.',
      hasFilter : true,
      hasAction : false,
      data      : collaborators,
      cardType  : 'COLLABORATOR'
    }
  }

  async searchCollaborators(data: object) {
    this.collaboratorListingConfig.data = await this.collaborators.getCollaboratorsTotalCost(data["start"], data["end"]);
  }

}


