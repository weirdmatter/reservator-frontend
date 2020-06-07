import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelControllerComponent } from './admin-panel.controller.component';

describe('AdminPanelControllerComponent', () => {
  let component: AdminPanelControllerComponent;
  let fixture: ComponentFixture<AdminPanelControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
