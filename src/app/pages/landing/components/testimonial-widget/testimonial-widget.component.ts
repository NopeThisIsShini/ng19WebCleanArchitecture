import { Component, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
// Declare gsap globally to avoid import errors since we are loading it via CDN
import { gsap } from 'gsap';
import { Button } from "primeng/button";

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
    imports: [CommonModule, AnimateOnScrollModule, Button],
    templateUrl: './testimonial-widget.component.html',
    styleUrls: ['./testimonial-widget.component.scss']
})
export class TestimonialWidget {
    testimonials = [
        {
            text: `"Before TandaTech, aligning our team took hours of back-and-forth meetings. Now, tasks, updates, and timelines live in one place — helping us focus purely on execution."`,
            name: 'Alex Carter',
            role: 'CEO, Skyline Apps',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Alex&backgroundColor=c0aede'
        },
        {
            text: `"Integrating TandaTech solutions into our workflow showed instant improvements in communication and task visibility. It blends seamlessly with our existing tools."`,
            name: 'Mia Davis',
            role: 'Creative Director, PixelPerfect',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Mia&backgroundColor=ffdfbf'
        },
        {
            text: `"TandaTech gave us the clarity we needed across all projects. Its clean interface keeps our team aligned and efficient. It's now a core part of our operations."`,
            name: 'Sarah Brown',
            role: 'Operations Lead, TechNova',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah&backgroundColor=b6e3f4'
        },
        {
            text: `"What we love most is how effortlessly TandaTech integrates with our tools. No more switching tabs — our productivity has doubled."`,
            name: 'Jessica Williams',
            role: 'Senior Project Manager, BrightTech',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Jessica&backgroundColor=ffdfbf'
        },
        {
            text: `"TandaTech transformed our workflow. Collaboration is smoother, meetings are shorter, and project turnaround times are noticeably faster."`,
            name: 'David Smith',
            role: 'Operations Lead, InnoWorks',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=David&backgroundColor=d1d4f9'
        },
        {
            text: `"Adopting TandaTech was a game-changer. Real-time updates and automation helped us speed up our marketing processes by 30%."`,
            name: 'Ryan Johnson',
            role: 'Product Manager, NextGen Solutions',
            avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Ryan&backgroundColor=ffd5dc'
        }
    ];
}