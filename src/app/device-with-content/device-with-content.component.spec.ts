import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceWithContentComponent } from './device-with-content.component';

describe('DeviceWithContentComponent', () => {
  let component: DeviceWithContentComponent;
  let fixture: ComponentFixture<DeviceWithContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceWithContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
