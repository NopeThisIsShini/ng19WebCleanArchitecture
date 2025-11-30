import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqWidgetComponent } from './faq-widget.component';

describe('FaqWidgetComponent', () => {
  let component: FaqWidgetComponent;
  let fixture: ComponentFixture<FaqWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
