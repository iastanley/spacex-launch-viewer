import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchControllerComponent } from './launch-controller.component';

describe('LaunchControllerComponent', () => {
  let component: LaunchControllerComponent;
  let fixture: ComponentFixture<LaunchControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
