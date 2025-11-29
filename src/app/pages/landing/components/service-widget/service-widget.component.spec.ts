import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWidgetComponent } from './service-widget.component';

describe('ServiceWidgetComponent', () => {
  let component: ServiceWidgetComponent;
  let fixture: ComponentFixture<ServiceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
