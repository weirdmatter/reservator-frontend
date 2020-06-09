import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCollaboratorsControllerComponent } from './list-collaborators.controller.component';

describe('ListCollaboratorsControllerComponent', () => {
  let component : ListCollaboratorsControllerComponent;
  let fixture   : ComponentFixture<ListCollaboratorsControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCollaboratorsControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCollaboratorsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
