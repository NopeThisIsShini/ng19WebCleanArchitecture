import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
    selector: 'service-widget',
    imports: [CommonModule, AnimateOnScrollModule],
    templateUrl: './service-widget.component.html',
    styleUrl: './service-widget.component.scss'
})
export class ServiceWidget implements AfterViewInit, OnDestroy {
    private ctx!: gsap.Context;

    constructor(private el: ElementRef) {}

    services = [
        {
            icon: 'fa-code',
            title: 'Website Development',
            desc: 'We deliver exceptional design and web-based products ensuring security, reliability and optimal performance.'
        },
        {
            icon: 'fa-mobile-screen',
            title: 'Mobile App Development',
            desc: 'Kick-start your digital transformation with our top-notch app development service and go the extra mile.'
        },
        {
            icon: 'fa-cart-shopping',
            title: 'E-commerce',
            desc: 'We create unique and flexible online shopping experiences.'
        },
        {
            icon: 'fa-robot',
            title: 'Robotic Process Automation',
            desc: 'We streamline workflow, making organizations profitable & enhance time efficiency.'
        },
        {
            icon: 'fa-brain',
            title: 'AI Development',
            desc: 'Our AI services enhance customer retention, streamline operations, and drive decisions.'
        },
        {
            icon: 'fa-pen-nib',
            title: 'UI/UX Design',
            desc: 'We create user-centric UI/UX designs that ensure intuitive, engaging, and seamless digital experiences.'
        }
    ];

    ngAfterViewInit(): void {
        // this.ctx = gsap.context(() => {
        //     // Service cards animation
        //     gsap.from('.card', {
        //         opacity: 0,
        //         scale: 0.8,
        //         y: 20,
        //         duration: 0.8,
        //         ease: 'power3.out',
        //         stagger: 0.2,
        //         scrollTrigger: {
        //             markers:true,
        //             trigger: '.container', // your card wrapper
        //             start: 'top 85%',
        //             toggleActions: 'play none none reverse'
        //         }
        //     });
        // }, this.el.nativeElement);
    }
    ngOnDestroy(): void {
        this.ctx.revert(); // Clean GSAP animation/context on component destroy
    }
}
