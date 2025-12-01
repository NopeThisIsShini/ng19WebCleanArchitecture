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
            icon: 'pi pi-code',
            title: 'Website Development',
            desc: 'We build secure, scalable and high-performance websites tailored to elevate your digital presence.'
        },
        {
            icon: 'pi pi-mobile',
            title: 'Mobile App Development',
            desc: 'Transform your ideas into powerful mobile apps with seamless performance and intuitive user experience.'
        },
        {
            icon: 'pi pi-shopping-cart',
            title: 'E-commerce Solutions',
            desc: 'We develop flexible, conversion-focused e-commerce platforms designed to grow your online business.'
        },
        {
            icon: 'pi pi-cog',
            title: 'Maintenance & Support',
            desc: 'Ensure smooth operations with our continuous monitoring, updates, and technical support services.'
        },
        {
            icon: 'pi pi-database',
            title: 'AI & Automation',
            desc: 'Enhance efficiency with intelligent AI solutions that automate workflows and empower smarter decisions.'
        },
        {
            icon: 'pi pi-palette',
            title: 'UI/UX Design',
            desc: 'We craft engaging, intuitive, and visually refined user experiences that align with your brand’s identity.'
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
