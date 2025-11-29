import { Component, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
@Component({
    selector: 'testimonial-widget',
    imports: [],
    templateUrl: './testimonial-widget.component.html',
    styleUrl: './testimonial-widget.component.scss'
})
export class TestimonialWidget {
    private ctx!: gsap.Context;
    private tweenUp!: gsap.core.Tween;
    private tweenDown!: gsap.core.Tween;

    constructor(private el: ElementRef) {}

    ngAfterViewInit(): void {
        this.ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            const durationUp = isMobile ? 60 : 40;
            const durationDown = 40;

            // Animate upward marquee
            this.tweenUp = gsap.to('.marquee-track-up', {
                yPercent: -50,
                ease: 'power3.out',
                duration: durationUp,
                repeat: -1
            });

            // Animate downward marquee
            this.tweenDown = gsap.fromTo(
                '.marquee-track-down',
                { yPercent: -50 },
                {
                    yPercent: 0,
                    ease: 'power3.out',
                    duration: durationDown,
                    repeat: -1
                }
            );

            // Pause on hover
            const container = this.el.nativeElement.querySelector('#marquee-container');

            if (container) {
                container.addEventListener('mouseenter', () => {
                    gsap.to(this.tweenUp, { timeScale: 0, duration: 0.5, overwrite: true });
                    gsap.to(this.tweenDown, { timeScale: 0, duration: 0.5, overwrite: true });
                });

                container.addEventListener('mouseleave', () => {
                    gsap.to(this.tweenUp, { timeScale: 1, duration: 0.5, overwrite: true });
                    gsap.to(this.tweenDown, { timeScale: 1, duration: 0.5, overwrite: true });
                });
            }
        }, this.el.nativeElement);
    }

    ngOnDestroy(): void {
        this.ctx.revert(); // Clean GSAP animation/context on component destroy
    }
}
