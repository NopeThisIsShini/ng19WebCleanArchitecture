import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface FaqItem {
    question: string;
    answer: string;
}
@Component({
    selector: 'faq-widget',
    imports: [CommonModule],
    templateUrl: './faq-widget.component.html',
    styleUrl: './faq-widget.component.scss'
})
export class FaqWidget {
    openIndex: number | null = 0;

    faqData: FaqItem[] = [
        {
            question: 'Where do start?',
            answer: 'Click here to apply by completing a 10-minute test and wait for a response through your e-mail.'
        },
        {
            question: 'How will I get paid?',
            answer: 'We offer payments via PayPal, Payoneer, and direct bank transfer. Payments are processed on a weekly basis.'
        },
        {
            question: 'What happens when I pass the test?',
            answer: 'You will be onboarded into our system and granted access to the available job queue immediately.'
        },
        {
            question: 'How many proofreading jobs do you have?',
            answer: 'The volume varies by season, but we typically have hundreds of active documents requiring review daily.'
        },
        {
            question: 'What happens when I fail the test?',
            answer: 'You may reapply after a 30-day waiting period. We encourage you to review our guidelines before trying again.'
        },
        {
            question: 'How do I know when a new job becomes available?',
            answer: 'We have a notification dashboard and can also send email alerts for high-priority tasks matching your skills.'
        }
    ];

    toggleAccordion(index: number): void {
        // If clicking the already open item, close it. Otherwise, open the new one.
        if (this.openIndex === index) {
            this.openIndex = null;
        } else {
            this.openIndex = index;
        }
    }
}
