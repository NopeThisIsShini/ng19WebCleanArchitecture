import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeAreWidgetComponent } from './what-we-are-widget.component';

describe('WhatWeAreWidgetComponent', () => {
  let component: WhatWeAreWidgetComponent;
  let fixture: ComponentFixture<WhatWeAreWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeAreWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeAreWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
