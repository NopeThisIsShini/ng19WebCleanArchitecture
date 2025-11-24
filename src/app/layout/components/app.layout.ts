import { Component, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutService } from '../services/layout.service';
import { AppSidebar } from './app.sidebar';

@Component({
    selector: 'app-layout',
    standalone: true,
    imports: [CommonModule, HeaderComponent, AppSidebar, RouterModule, FooterComponent],
    template: `<div class="layout-wrapper" [ngClass]="containerClass">
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <app-header></app-header>
            <div class="layout-main custom-gradient-bg">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div>`,
    styles: [
        `
            ::ng-deep {
                /* Gradient background wrapper */
                .custom-gradient-bg {
                    position: relative;
                    overflow: hidden;

                    /* ensure content stays above background */
                    > * {
                        position: relative;
                        // z-index: 1;
                    }

                    /* Top-right purple glow */
                    &::before {
                        content: '';
                        position: absolute;
                        z-index: 0;
                        pointer-events: none;

                        width: 60vw;
                        height: 60vw;
                        max-width: 1100px;
                        max-height: 1100px;

                        right: -10vw;
                        top: -15vw;
                        border-radius: 50%;

                        background: radial-gradient(circle at 30% 30%, rgba(144, 137, 252, 0.95) 0%, rgba(144, 137, 252, 0.45) 20%, rgba(144, 137, 252, 0.12) 45%, rgba(144, 137, 252, 0.03) 60%, transparent 75%);

                        filter: blur(80px);
                        opacity: 0.45;
                        transform: translateZ(0);
                    }

                    /*  Bottom-left pink glow */
                    &::after {
                        content: '';
                        position: absolute;
                        z-index: 0;
                        pointer-events: none;

                        width: 55vw;
                        height: 55vw;
                        max-width: 1000px;
                        max-height: 1000px;

                        left: -12vw;
                        bottom: -18vw;
                        border-radius: 50%;

                        background: radial-gradient(circle at 70% 70%, rgba(255, 128, 181, 0.95) 0%, rgba(255, 128, 181, 0.48) 18%, rgba(255, 128, 181, 0.08) 45%, transparent 65%);

                        filter: blur(80px);
                        opacity: 0.36;
                        transform: translateZ(0) scale(1.02);
                    }
                }
            }
        `
    ]
})
export class AppLayout {
    overlayMenuOpenSubscription: Subscription;

    menuOutsideClickListener: any;

    @ViewChild(AppSidebar) appSidebar!: AppSidebar;

    @ViewChild(HeaderComponent) appTopBar!: HeaderComponent;

    constructor(
        public layoutService: LayoutService,
        public renderer: Renderer2,
        public router: Router
    ) {
        this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (!this.menuOutsideClickListener) {
                this.menuOutsideClickListener = this.renderer.listen('document', 'click', (event) => {
                    if (this.isOutsideClicked(event)) {
                        this.hideMenu();
                    }
                });
            }

            if (this.layoutService.layoutState().staticMenuMobileActive) {
                this.blockBodyScroll();
            }
        });

        this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
            this.hideMenu();
        });
    }

    isOutsideClicked(event: MouseEvent) {
        const sidebarEl = document.querySelector('.layout-sidebar');
        const topbarEl = document.querySelector('.layout-menu-button');
        const eventTarget = event.target as Node;

        return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
    }

    hideMenu() {
        this.layoutService.layoutState.update((prev) => ({
            ...prev,
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            menuHoverActive: false
        }));
        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
            this.menuOutsideClickListener = null;
        }
        this.unblockBodyScroll();
    }

    blockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.add('blocked-scroll');
        } else {
            document.body.className += ' blocked-scroll';
        }
    }

    unblockBodyScroll(): void {
        if (document.body.classList) {
            document.body.classList.remove('blocked-scroll');
        } else {
            document.body.className = document.body.className.replace(new RegExp('(^|\\b)' + 'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    get containerClass() {
        return {
            'layout-overlay': this.layoutService.layoutConfig().menuMode === 'overlay',
            'layout-static': this.layoutService.layoutConfig().menuMode === 'static',
            'layout-static-inactive': this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === 'static',
            'layout-overlay-active': this.layoutService.layoutState().overlayMenuActive,
            'layout-mobile-active': this.layoutService.layoutState().staticMenuMobileActive
        };
    }

    ngOnDestroy() {
        if (this.overlayMenuOpenSubscription) {
            this.overlayMenuOpenSubscription.unsubscribe();
        }

        if (this.menuOutsideClickListener) {
            this.menuOutsideClickListener();
        }
    }
}
