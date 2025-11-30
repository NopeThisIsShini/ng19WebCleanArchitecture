import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule],
    templateUrl: './hero-widget.component.html',
    styleUrl: './hero-widget.component.scss'
})
export class HeroWidget implements AfterViewInit, OnDestroy {
    private ctx!: gsap.Context;

    constructor(private el: ElementRef) {}
  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.from('.hero-text', {
            y: 50,
          opacity: 0,
            delay: 0.8,
            duration: 0.8,
            stagger: 0.4,
            ease: 'power3.out'
        }).from(
            '.hero-image',
            {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            },
            '-=0.6'
      );
      
    }, this.el.nativeElement);

  }
  ngOnDestroy(): void {
    this.ctx.revert();
  }
}
