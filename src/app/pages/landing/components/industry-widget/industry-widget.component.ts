import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
    selector: 'industry-widget',
    imports: [AnimateOnScrollModule, CommonModule],
    templateUrl: './industry-widget.component.html',
    styleUrl: './industry-widget.component.scss'
})
export class IndustryWidget {
    industries = [
        {
            title: 'Healthcare',
            desc: 'We help streamline operations, improve patient care and enhance health outcomes with our custom software development service.',
            icon: `
      <path d="M12 21.35l-1.45-1.32C5.4..." class="icon-blue" stroke-width="1.5"/>
      <path d="M12 7v6m-3-3h6" stroke="white" stroke-width="2" stroke-linecap="round"/>
    `
        },
        {
            title: 'Hospitality',
            desc: 'We help enhance online booking, making sure customers can easily search and compare options. Helps businesses increase occupancy rate.',
            icon: `
      <rect x="5" y="4" width="14" height="16" rx="2" class="icon-blue" stroke-width="1.5"/>
      <path d="M9 2H15" class="icon-blue" stroke-width="1.5"/>
      <path d="M12 12a3 3 0..." stroke="#7DA5D6" stroke-width="1.5" fill="white"/>
      <path d="M5 14h14" class="icon-blue" stroke-width="1.5" stroke-dasharray="2 2"/>
    `
        },
        {
            title: 'Manufacturing',
            desc: 'Optimizing the production process and improving efficiency is our primary task.',
            icon: `
      <path d="M12 8V4m0 0a2 2 0..." class="icon-blue" stroke-width="1.5"/>
      <rect x="4" y="16" width="16" height="4" rx="1" class="icon-blue" stroke-width="1.5"/>
    `
        },
        {
            title: 'Retail and Ecommerce',
            desc: 'We focus on achieving optimal efficiency in business operations.',
            icon: `
      <rect x="2" y="4" width="20" height="12" rx="2" class="icon-blue" stroke-width="1.5"/>
      <path d="M2 8h20" class="icon-blue" stroke-width="1.5"/>
      <path d="M6 12h4" class="icon-blue" stroke-width="1.5"/>
      <path d="M15 19l2-2 4 4" stroke="#7DA5D6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="16" cy="16" r="2" fill="#D8E7F7"/>
    `
        },
        {
            title: 'Fintech',
            desc: 'Secure, reliable fin-tech solution equipped to offer meaningful results.',
            icon: `
      <path d="M3 21h18M3 16l4-4..." class="icon-blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 6h7v7" class="icon-blue" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="18" y="14" width="4" height="4" class="icon-blue" stroke-width="1.5"/>
    `
        },
        {
            title: 'Real Estate',
            desc: 'Developing a platform offering easy access to property listing and virtual tours.',
            icon: `
      <path d="M3 21h18" class="icon-blue" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M5 21V7l8-4 8 4v14" class="icon-blue" stroke-width="1.5" stroke-linejoin="round"/>
      <rect x="9" y="10" width="6" height="6" class="icon-blue" stroke-width="1.5" fill="white"/>
    `
        },
        {
            title: 'Education',
            desc: 'Making it easy for students to know about the institute, courses, faculty and infrastructure.',
            icon: `
      <path d="M4 19.5A2.5..." class="icon-blue" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M6.5 2H20v20..." class="icon-blue" stroke-width="1.5"/>
      <path d="M12 8h4M12 12h4" stroke="#7DA5D6" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M9 7v6" stroke="#7DA5D6" stroke-width="1.5" stroke-linecap="round"/>
    `
        }
    ];
}
