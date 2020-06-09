import {Component, Input, OnInit} from '@angular/core';
import {Resource} from "../../interfaces/resource.interface";

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.sass']
})
export class ResourceCardComponent implements OnInit {

  @Input() data : Resource

  constructor() { }

  ngOnInit(): void {
  }

}
