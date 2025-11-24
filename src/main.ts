import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appConfig } from './app.config';

bootstrapApplication(AppComponent, appConfig)
    .then(() => {
        // Safely remove loader once Angular is ready
        const loader = document.getElementById('app-loader');
        const appRoot = document.querySelector('app-root');

        if (loader && appRoot instanceof HTMLElement) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
                appRoot.style.display = 'block';
            },0);
        }
    })
    .catch((err) => console.error(err));
