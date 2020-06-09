import {Component, Input, OnInit} from '@angular/core';
import {Collaborator} from "../../interfaces/collaborator.interface";

@Component({
  selector: 'app-collaborator-card',
  templateUrl: './collaborator-card.component.html',
  styleUrls: ['./collaborator-card.component.sass']
})
export class CollaboratorCardComponent implements OnInit {

  @Input() data : Collaborator

  constructor() { }

  ngOnInit(): void {}

}
