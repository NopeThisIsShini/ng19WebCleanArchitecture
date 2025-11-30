import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { HighlightsWidget } from './components/highlightswidget';
import { PricingWidget } from './components/pricingwidget';

import { TopbarWidget } from './components/topbar-widget/topbar-widget.component';
import { HeroWidget } from './components/hero-widget/hero-widget.component';
import { FooterWidget } from './components/footer-widget/footer-widget.component';
import { CommonModule } from '@angular/common';
import { ServiceWidget } from './components/service-widget/service-widget.component';
import { ProjectWidget } from './components/project-widget/project-widget.component';
import { IndustryWidget } from './components/industry-widget/industry-widget.component';
import { TechWidget } from './components/tech-widget/tech-widget.component';
import { TestimonialWidget } from './components/testimonial-widget/testimonial-widget.component';
import { WhyusWidget } from './components/whyus-widget/whyus-widget.component';
import { CustomerWidget } from './components/customer-widget/customer-widget.component';
import { WhatWeAreWidget } from './components/what-we-are-widget/what-we-are-widget.component';
import { ContactUsWidget } from './components/contact-us-widget/contact-us-widget.component';
import { FaqWidget } from './components/faq-widget/faq-widget.component';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [
        RouterModule,
        TopbarWidget,
        HeroWidget,
        FooterWidget,
        RippleModule,
        StyleClassModule,
        ButtonModule,
        DividerModule,
        CommonModule,
        ServiceWidget,
        ProjectWidget,
        IndustryWidget,
        TechWidget,
        TestimonialWidget,
        WhyusWidget,
        CustomerWidget,
        WhatWeAreWidget,
        ContactUsWidget,
        FaqWidget
    ],
    template: `
        <div class="">
            <div id="home" class="landing-wrapper">
                <!-- <header > -->
                <topbar-widget />
                <!-- </header> -->
                <hero-widget />
                <what-we-are-widget />
                <project-widget />
                <tech-widget />
                <service-widget />
                <industry-widget />
                <customer-widget />
                <whyus-widget />
                <testimonial-widget />
                <faq-widget />

                    <contact-us-widget />
                    <footer-widget />
            </div>
        </div>
    `,
    styles: [``]
})
export class Landing {}
