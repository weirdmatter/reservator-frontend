import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPanelPresenterComponent } from './admin-panel.presenter.component';

describe('AdminPanelPresenterComponent', () => {
  let component: AdminPanelPresenterComponent;
  let fixture: ComponentFixture<AdminPanelPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPanelPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPanelPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
