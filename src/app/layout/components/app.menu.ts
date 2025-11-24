import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { PermissionService } from '@app/shared/services';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    constructor(private permissionService: PermissionService) {}

    ngOnInit() {
        this.loadModels();
        // this.model = this.filterMenu(this.model);
    }

    loadModels() {
        this.model = [
            {
                items: [
                    {
                        label: 'Administration',
                        icon: 'pi pi-fw pi-shield',
                        items: [
                            {
                                label: 'Roles',
                                icon: 'pi pi-fw pi-sitemap',
                                routerLink: ['/administration/role']
                            },
                            {
                                label: 'Users',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/administration/user']
                            }
                        ]
                    },
                    {
                        label: 'Site B',
                        icon: 'pi pi-fw pi-objects-column',
                        items: [
                            {
                                label: 'Inspection',
                                icon: 'pi pi-fw pi-check-circle',
                                items: [
                                    {
                                        label: 'Customer',
                                        icon: 'pi pi-fw pi-user',
                                        routerLink: ['/siteB/inspection/customer']
                                    },
                                    {
                                        label: 'Vehicle',
                                        icon: 'pi pi-fw pi-car',
                                        routerLink: ['/siteB/inspection/vehicle']
                                    },
                                    {
                                        label: 'Inspection Report',
                                        icon: 'pi pi-fw pi-file',
                                        routerLink: ['/siteB/inspection/report']
                                    }
                                ]
                            },
                            {
                                label: 'Tyre Repair',
                                icon: 'pi pi-fw pi-cog', // you can change icon if you want
                                items: [
                                    {
                                        label: 'Service',
                                        icon: 'pi pi-fw pi-wrench',
                                        routerLink: ['/siteB/tyre-repair/service']
                                    },
                                    {
                                        label: 'Subservice (Adds on)',
                                        icon: 'pi pi-fw pi-wrench',
                                        routerLink: ['/siteB/tyre-repair/sub-service']
                                    },
                                    {
                                        label: 'Invoice',
                                        icon: 'pi pi-fw pi-receipt',
                                        routerLink: ['/siteB/tyre-repair/invoice']
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        label: 'Tyre Hub',
                        icon: 'pi pi-cloud',
                        items: [
                            {
                                label: 'Ticket',
                                icon: 'pi pi-tag',
                                routerLink: ['/tyre-hub/ticket']
                            }
                        ]
                    }
                ]
            }
        ];
    }

    filterMenu(items: any[]): any[] {
        return items
            .map((item) => {
                const cloned = { ...item };

                if (cloned.items) {
                    cloned.items = this.filterMenu(cloned.items);
                }

                if (cloned.routerLink) {
                    const key = this.mapRouterToPermission(cloned.routerLink[0]);
                    if (!this.permissionService.hasPermission(key)) {
                        return null;
                    }
                }

                if (cloned.items && cloned.items.length === 0 && !cloned.routerLink && !cloned.separator) {
                    return null;
                }

                return cloned;
            })
            .filter(Boolean);
    }

    mapRouterToPermission(router: string): string {
        const key = router.replace(/^\//, '').replace(/\//g, '.');
        return key + '.read';
    }
}
