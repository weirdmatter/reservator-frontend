import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResourcesControllerComponent } from './list-resources.controller.component';

describe('ListResourcesControllerComponent', () => {
  let component: ListResourcesControllerComponent;
  let fixture: ComponentFixture<ListResourcesControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResourcesControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResourcesControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
