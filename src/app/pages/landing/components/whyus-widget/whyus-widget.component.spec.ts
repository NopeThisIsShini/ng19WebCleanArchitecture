import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyusWidgetComponent } from './whyus-widget.component';

describe('WhyusWidgetComponent', () => {
  let component: WhyusWidgetComponent;
  let fixture: ComponentFixture<WhyusWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyusWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
