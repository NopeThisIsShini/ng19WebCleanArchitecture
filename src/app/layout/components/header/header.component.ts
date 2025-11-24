import { Component, computed, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { PopoverModule } from 'primeng/popover';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { AuthService, ProfileService } from '@app/pages/services';
import { LayoutService } from '@app/layout/services/layout.service';
import { PrimengImports } from '@app/shared';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, StyleClassModule, ButtonModule, RippleModule, PopoverModule, RouterModule, MenuModule, CheckboxModule, DialogModule, FormsModule, AvatarModule, AvatarGroupModule, OverlayBadgeModule, ...PrimengImports],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
    navbarfixed: boolean = false;
    items: any[] = [];
    activity_logs: any[] = [];
    activity_logs_counts: number = 0;
    LayoutService = inject(LayoutService);

    isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);

    visible: boolean = false;

    toggleDarkMode() {
        this.LayoutService.layoutConfig.update((state) => ({
            ...state,
            darkTheme: !state.darkTheme
        }));
    }

    @HostListener('window:scroll', ['$event']) onscroll() {
        if (window.scrollY > 50) {
            this.navbarfixed = true;
        } else {
            this.navbarfixed = false;
        }
    }
    constructor(
        public layoutService: LayoutService,
        public authService: AuthService,
        private router: Router,
        private profileService: ProfileService
    ) {
        this.getAllActivityLogs();
    }

    // signal reference for binding in template
    profileImage = computed(() => this.profileService.profileImage());
    profileName = computed(() => this.profileService.profileName());
    ngOnInit(): void {
        this.items = [
            {
                separator: true
            },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: '⌘+S'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O',
                        command: () => this.goToSettings()
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q',
                        command: () => {
                            this.logOut();
                        }
                    }
                ]
            },
            {
                separator: true
            }
        ];
        this.profileService.getMyProfile().subscribe((res) => {
            if (res.success) {
                this.profileService.setProfileImage(res.result.profilePicture);
                this.profileService.setProfileName(res.result.name);
            }
        });
    }

    logOut() {
        this.authService.logout();
    }
    goToSettings() {
        this.router.navigate(['/settings']);
    }
    handleSetting(open: boolean) {
        this.visible = open;
    }

    onItemClick(item: any) {
        if (item.link === 'logout') {
            this.logOut();
        } else {
            this.router.navigate(['/settings']);
        }
    }

    async getAllActivityLogs() {
        // const logs = await this.logs.getAllLogs();
        // this.activity_logs = logs.adminActivityLogs;
        // this.activity_logs_counts = logs.totalRecord;
    }

    goToActivityLogs() {
        this.router.navigate(['/log-management']);
    }

    async markAsRead(notification: any) {
        // if (!notification.isRead) {
        //   try {
        //     await this.logs.markAllNotificationsAsRead({
        //       adminActivityLogIds: [notification.id],
        //     });
        //     notification.isRead = true;
        //     this.getAllActivityLogs();
        //   } catch (error) {
        //     console.error('Error marking notification as read', error);
        //   }
        // }
    }

    async markAllNotificationsAsRead() {
        // try {
        //   const logIds = this.activity_logs.map((log) => log.id);
        //   await this.logs.markAllNotificationsAsRead({
        //     adminActivityLogIds: logIds,
        //   });
        //   // Optionally update local state to reflect changes
        //   this.activity_logs = this.activity_logs.map((log) => ({
        //     ...log,
        //     isRead: true,
        //   }));
        //   this.getAllActivityLogs();
        // } catch (error) {
        //   console.error('Error marking all notifications as read', error);
        // }
    }
}
