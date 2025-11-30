import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, QueryList, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface StatItem {
    target: number;
    suffix: string;
    label: string;
    icon: SafeHtml;
}

@Component({
    selector: 'whyus-widget',
    imports: [CommonModule],
    templateUrl: './whyus-widget.component.html',
    styleUrl: './whyus-widget.component.scss'
})
export class WhyusWidget {
    @ViewChildren('counter') counters!: QueryList<ElementRef>;

    leftStats: StatItem[];
    rightStats: StatItem[];

    constructor(
        @Inject(PLATFORM_ID) private platformId: Object,
        private sanitizer: DomSanitizer
    ) {
        // Initialize Data with sanitized SVG strings
        this.leftStats = [
            {
                target: 750,
                suffix: '+',
                label: 'Project Delivered',
                icon: this.sanitizer.bypassSecurityTrustHtml(`
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="8 10 6 12 8 14"></polyline>
          <polyline points="16 10 18 12 16 14"></polyline>
          <line x1="10.5" y1="16" x2="13.5" y2="8"></line>
        `)
            },
            {
                target: 98,
                suffix: '%',
                label: 'Success Rate',
                icon: this.sanitizer.bypassSecurityTrustHtml(`
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9 12l2 2 4-4"></path>
        `)
            }
        ];

        this.rightStats = [
            {
                target: 140,
                suffix: '+',
                label: "Client's Worldwide",
                icon: this.sanitizer.bypassSecurityTrustHtml(`
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        `)
            },
            {
                target: 1.4,
                suffix: 'M+',
                label: 'Hours Worked',
                icon: this.sanitizer.bypassSecurityTrustHtml(`
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        `)
            }
        ];
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.animateCounters();
        }
    }

    animateCounters() {
        this.counters.forEach((counterRef) => {
            const element = counterRef.nativeElement;
            // Get attributes safely
            const targetAttr = element.getAttribute('data-target');
            const suffixAttr = element.getAttribute('data-suffix');

            if (!targetAttr) return;

            const target = parseFloat(targetAttr);
            const suffix = suffixAttr || '+';
            const duration = 2000;

            let startTimestamp: number | null = null;

            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);

                const current = progress * target;

                if (progress < 1) {
                    if (target % 1 !== 0) {
                        element.innerText = current.toFixed(1) + suffix;
                    } else {
                        element.innerText = Math.ceil(current) + suffix;
                    }
                    window.requestAnimationFrame(step);
                } else {
                    element.innerText = target + suffix;
                }
            };

            window.requestAnimationFrame(step);
        });
    }
}
