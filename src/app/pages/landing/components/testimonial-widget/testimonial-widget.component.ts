import { Component, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
// Declare gsap globally to avoid import errors since we are loading it via CDN
import { gsap } from 'gsap';

interface Testimonial {
    name: string;
    role: string;
    content: string;
    image: string;
    stars: number;
}

@Component({
    selector: 'testimonial-widget',
    standalone: true,
    imports: [CommonModule, AnimateOnScrollModule],
    templateUrl: './testimonial-widget.component.html',
    styleUrls: ['./testimonial-widget.component.scss'],
})
export class TestimonialWidget implements AfterViewInit, OnDestroy {
    // Using 'any' type because GSAP is loaded dynamically
    private ctx!: any;
    private tweenUp: any | null = null;
    private tweenDown: any | null = null;
    isBrowser: boolean;


    testimonials: Testimonial[] = [
        {
            name: 'James Milner',
            role: 'Member since 2024',
            content: "The platform's focus on guidance rather than direct trading is a significant advantage. It allows me to learn strategies safely.",
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            stars: 5
        },
        {
            name: 'Maya Sam',
            role: 'Member since 2024',
            content: 'Instrumental in building my confidence. The live Q&A sessions with experts and community forums are amazing features.',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            stars: 5
        },
        {
            name: 'Yang Lee',
            role: 'Member since 2024',
            content: 'The advisors are knowledgeable and always available. Ensuring that I feel confident in my trading decisions every day.',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            stars: 5
        },
        {
            name: 'Sindy Sam',
            role: 'Member since 2024',
            content: "I've been using for several months now, and it has exceeded my expectations in every way. This platform is perfect for expert guidance.",
            image: 'https://randomuser.me/api/portraits/women/22.jpg',
            stars: 5
        },
        {
            name: 'Michael Chen',
            role: 'Member since 2024',
            content: 'This platform is perfect for those who seek expert guidance and strategic advice without the pressure or risk of actual trading.',
            image: 'https://randomuser.me/api/portraits/men/85.jpg',
            stars: 5
        },
        {
            name: 'Sarah Jenkins',
            role: 'Member since 2024',
            content: "The advisors are knowledgeable and always available to answer questions. It's truly a game-changer for anyone investing.",
            image: 'https://randomuser.me/api/portraits/women/12.jpg',
            stars: 5
        }
    ];

    get column1() {
        return this.testimonials.slice(0, 3);
    }
    get column2() {
        return this.testimonials.slice(3, 6);
    }

    constructor(
        private el: ElementRef,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngAfterViewInit(): void {
        if (!this.isBrowser) return;

       this.initAnimations();
    }


    private initAnimations() {
        this.ctx = gsap.context(() => {
            const marqueeContainer = this.el.nativeElement.querySelector('#marquee-container');
            const trackUp = this.el.nativeElement.querySelector('.marquee-track-up');
            const trackDown = this.el.nativeElement.querySelector('.marquee-track-down');

            const isMobile = window.innerWidth < 768;
            const durationUp = isMobile ? 80 : 50;
            const durationDown = 50;

            // Track 1: Upward
            if (trackUp) {
                this.tweenUp = gsap.to(trackUp, {
                    yPercent: -50,
                    delay: 0.6,
                    ease: 'power1.out',
                    duration: durationUp,
                    repeat: -1
                });
            }

            // Track 2: Downward (Desktop only)
            if (trackDown && !isMobile) {
                this.tweenDown = gsap.fromTo(
                    trackDown,
                    { yPercent: -50 },
                    {
                        yPercent: 0,
                        delay: 0.9,
                        ease: 'power1.out',
                        duration: durationDown,
                        repeat: -1
                    }
                );
            }

            // Hover Pause
            if (marqueeContainer) {
                marqueeContainer.addEventListener('mouseenter', () => this.pauseMarquee(true));
                marqueeContainer.addEventListener('mouseleave', () => this.pauseMarquee(false));
            }
        }, this.el.nativeElement);
    }

    private pauseMarquee(isPaused: boolean) {

        const timeScale = isPaused ? 0 : 1;
        const duration = 0.5;

        if (this.tweenUp) {
            gsap.to(this.tweenUp, { timeScale: timeScale, duration: duration, overwrite: true });
        }
        if (this.tweenDown) {
            gsap.to(this.tweenDown, { timeScale: timeScale, duration: duration, overwrite: true });
        }
    }

    ngOnDestroy(): void {
        if (this.ctx) this.ctx.revert();
    }
}
