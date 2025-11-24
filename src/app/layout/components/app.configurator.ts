import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, computed, EventEmitter, inject, Input, OnChanges, OnInit, Output, PLATFORM_ID, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { $t } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { PrimeNG } from 'primeng/config';
import { Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';

import { LayoutService } from '../services/layout.service';
import { ConfigService } from '../../shared/services/api/config.service';

// Fixed custom color palette
const CUSTOM_PRIMARY_PALETTE = {
    50: '#e6f0ff',
    100: '#cce0ff',
    200: '#99c2ff',
    300: '#66a3ff',
    400: '#3385ff',
    500: '#00319c', // Your primary color
    600: '#002980',
    700: '#002066',
    800: '#00184d',
    900: '#001033',
    950: '#000819'
};

const CUSTOM_ACCENT_PALETTE = {
    50: '#ffe6e6',
    100: '#ffcccc',
    200: '#ff9999',
    300: '#ff6666',
    400: '#ff3333',
    500: '#ff0000', // Your accent/secondary color
    600: '#cc0000',
    700: '#990000',
    800: '#660000',
    900: '#330000',
    950: '#190000'
};

const FIXED_SURFACE_PALETTE = {
    0: '#ffffff',
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617'
};

@Component({
    selector: 'app-configurator',
    standalone: true,
    imports: [CommonModule, FormsModule, SelectButtonModule, Drawer, ButtonModule],
    template: `
        <p-drawer #drawerRef [(visible)]="openSetting" position="right" (onHide)="closeCallback()">
            <ng-template #headless>
                <div class="flex flex-col h-full p-3">
                    <div class="flex items-center justify-between pt-4 shrink-0">
                        <span class="inline-flex items-center gap-2 bg-[var(--surface-ground)] p-2 rounded-md">
                            <i class="pi pi-palette text-[var(--primary-color)]" style="font-size: 1.2rem"></i>
                            <span class="text-2xl">Settings</span>
                        </span>
                        <span>
                            <p-button type="button" (click)="closeCallback()" icon="pi pi-times" rounded="true" outlined="true" styleClass="h-8 w-8"></p-button>
                        </span>
                    </div>

                    <div class="flex flex-col p-2 gap-4 overflow-auto">
                        <!-- Color Scheme Toggle (Dark/Light only) -->
                        <div class="flex flex-col gap-2">
                            <span class="text-sm text-muted-color font-semibold">Color Scheme</span>
                            <p-selectbutton [ngModel]="colorScheme()" (ngModelChange)="onColorSchemeChange($event)" [options]="colorSchemeOptions" [allowEmpty]="false" size="small" />
                        </div>

                        <!-- Menu Mode (if needed) -->
                        <div *ngIf="showMenuModeButton()" class="flex flex-col gap-2">
                            <span class="text-sm text-muted-color font-semibold">Menu Mode</span>
                            <p-selectbutton [ngModel]="menuMode()" (ngModelChange)="onMenuModeChange($event)" [options]="menuModeOptions" [allowEmpty]="false" size="small" />
                        </div>

                        <!-- Save Preset -->
                        <div>
                            <p-button type="button" (click)="savePreset()" icon="pi pi-save" label="Save Settings" styleClass="w-full"></p-button>
                        </div>
                    </div>
                </div>
            </ng-template>
        </p-drawer>
    `,
    host: {
        class: 'hidden absolute top-[3.25rem] right-0 w-72 p-4 bg-[var(--surface-ground)] border border-surface rounded-lg origin-top shadow-sm'
    }
})
export class AppConfigurator implements OnChanges, OnInit {
    router = inject(Router);
    config: PrimeNG = inject(PrimeNG);
    layoutService: LayoutService = inject(LayoutService);
    platformId = inject(PLATFORM_ID);
    primeng = inject(PrimeNG);

    showMenuModeButton = signal(!this.router.url.includes('auth'));

    menuModeOptions = [
        { label: 'Static', value: 'static' },
        { label: 'Overlay', value: 'overlay' }
    ];

    colorSchemeOptions = [
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' }
    ];

    @ViewChild('drawerRef') drawerRef!: Drawer;
    @Input() openSetting: boolean = false;
    @Output() onSettingChange = new EventEmitter<boolean>();

    constructor(private configService: ConfigService) {}

    ngOnChanges() {}

    ngOnInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            this.loadStaticConfig();
        }
    }

    private loadStaticConfig() {
        const config = {
            preset: 'Aura',
            primary: 'custom-blue',
            surface: 'gray',
            darkTheme: false,
            menuMode: 'static'
        };

        // 1. Load configuration
        this.layoutService.loadInitialConfig(config);

        // 2. Apply preset and colors
        this.applyCustomTheme();
    }

    private applyCustomTheme() {
        const customPreset = {
            semantic: {
                primary: CUSTOM_PRIMARY_PALETTE,
                colorScheme: {
                    light: {
                        primary: {
                            color: '#00319c',
                            contrastColor: '#ffffff',
                            hoverColor: '#002980',
                            activeColor: '#002066'
                        },
                        highlight: {
                            background: '#e6f0ff',
                            focusBackground: '#cce0ff',
                            color: '#00319c',
                            focusColor: '#002980'
                        }
                    },
                    dark: {
                        primary: {
                            color: '#3385ff',
                            contrastColor: '#001033',
                            hoverColor: '#66a3ff',
                            activeColor: '#99c2ff'
                        },
                        highlight: {
                            background: 'color-mix(in srgb, #3385ff, transparent 84%)',
                            focusBackground: 'color-mix(in srgb, #3385ff, transparent 76%)',
                            color: 'rgba(255,255,255,.87)',
                            focusColor: 'rgba(255,255,255,.87)'
                        }
                    }
                }
            }
        };

        // Apply theme
        $t().preset(Aura).preset(customPreset).surfacePalette(FIXED_SURFACE_PALETTE).use({ useDefaultOptions: true });
    }

    closeCallback(): void {
        this.openSetting = false;
        this.onSettingChange.emit(false);
    }

    menuMode = computed(() => this.layoutService.layoutConfig().menuMode);
    colorScheme = computed(() => (this.layoutService.layoutConfig().darkTheme ? 'dark' : 'light'));

    onColorSchemeChange(event: string) {
        const isDark = event === 'dark';
        this.layoutService.layoutConfig.update((state: any) => ({
            ...state,
            darkTheme: isDark
        }));

        // Reapply theme with new color scheme
        this.applyCustomTheme();
    }

    onMenuModeChange(event: string) {
        this.layoutService.layoutConfig.update((prev: any) => ({
            ...prev,
            menuMode: event
        }));
    }

    savePreset() {
        const payload = {
            preset: 'Aura',
            primary: 'custom-blue',
            surface: 'slate',
            darkTheme: this.layoutService.layoutConfig().darkTheme as boolean,
            menuMode: this.layoutService.layoutConfig().menuMode as string
        };

        this.configService.saveUserPreferences(payload).subscribe({
            next: (res) => console.log('Settings saved successfully'),
            error: (err) => console.error('Error saving settings:', err),
            complete: () => {}
        });
    }
}
