import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryWidgetComponent } from './industry-widget.component';

describe('IndustryWidgetComponent', () => {
  let component: IndustryWidgetComponent;
  let fixture: ComponentFixture<IndustryWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
