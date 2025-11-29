import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
interface Link {
    label: string;
    link: string;
    icon?: string; // Optional for icons
}

interface MenuItem {
    title: string;
    menuItems: Link[];
    icons?: Link[]; // Separate property for icons
}
@Component({
    selector: 'footer-widget',
    imports: [CommonModule],
    templateUrl: './footer-widget.component.html',
    styleUrl: './footer-widget.component.scss'
})
export class FooterWidget {
    logo: string = 'assets/images/logo.png';
    menuItems: MenuItem[] = [
        {
            title: 'Product',
            menuItems: [
                { label: 'Download', link: '/download', icon: 'pi pi-arrow-up-right' },
                { label: 'Android', link: '/download/android', icon: 'pi pi-android' },
                { label: 'Apple', link: '/download/apple', icon: 'pi pi-apple' }
            ],
            icons: []
        },
        {
            title: 'Community',
            menuItems: [
                { label: 'Help', link: '/help' },
                { label: 'X', link: '/x' },
                { label: 'Instagram', link: '/instagram' },
                { label: 'LinkedIn', link: '/linkedIn' }
            ]
        }
    ];

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
        }
    }
}
