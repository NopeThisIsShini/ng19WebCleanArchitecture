import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'service-widget',
    imports: [CommonModule],
    templateUrl: './service-widget.component.html',
    styleUrl: './service-widget.component.scss'
})
export class ServiceWidget {
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
}
