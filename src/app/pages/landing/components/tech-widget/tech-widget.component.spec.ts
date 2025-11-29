import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechWidgetComponent } from './tech-widget.component';

describe('TechWidgetComponent', () => {
  let component: TechWidgetComponent;
  let fixture: ComponentFixture<TechWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
