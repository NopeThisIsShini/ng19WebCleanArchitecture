import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsWidgetComponent } from './contact-us-widget.component';

describe('ContactUsWidgetComponent', () => {
  let component: ContactUsWidgetComponent;
  let fixture: ComponentFixture<ContactUsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
