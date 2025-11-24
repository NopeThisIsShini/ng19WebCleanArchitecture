import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, enableProdMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withHashLocation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { authInterceptor, baseUrlInterceptor, errorInterceptor } from './app/utils/interceptor';


export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(
            appRoutes,
            withInMemoryScrolling({
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            }),
            withEnabledBlockingInitialNavigation(),
            withHashLocation()
        ),

        MessageService,
        DialogService,
        ConfirmationService,
        provideHttpClient(withFetch(), withInterceptors([baseUrlInterceptor, errorInterceptor, authInterceptor])),
        // provideAppInitializer(() =>
        //     inject(ConfigService).loadUserAndPermissions()
        // ),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura,
                options: {
                    prefix: 'p',
                    darkModeSelector: '.app-dark',
                    cssLayer: {
                        name: 'primeng',
                        order: 'app-styles, primeng, another-css-library'
                    }
                }
            },
            inputVariant: 'outlined', // outlined , filled
            ripple: true,
            zIndex: {
                modal: 1100, // dialog, sidebar
                overlay: 1000, // dropdown, overlaypanel
                menu: 1000, // overlay menus
                tooltip: 1100 // tooltip
            },
            translation: {
                accept: 'Aceptar',
                reject: 'Rechazar'
            }
        })
    ]
};
