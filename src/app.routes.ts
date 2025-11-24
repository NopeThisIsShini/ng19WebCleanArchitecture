import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/components/app.layout';
import { authGuard } from './app/utils/guard';
import { LOCAL_ROUTES } from './app/utils/routes';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        // canActivate: [authGuard],
        children: [
            {
                path: '',
                redirectTo: LOCAL_ROUTES.ACCOUNT,
                pathMatch: 'full'
            },
            {
                path: LOCAL_ROUTES.ADMINISTRATION,
                loadChildren: () => import('./app/pages/administration/administration.routes')
            },
            {
                path: LOCAL_ROUTES.ACCOUNT,
                loadChildren: () => import('./app/pages/account/account.routes')
            }
        ]
    },

    {
        path: LOCAL_ROUTES.AUTH,
        loadChildren: () => import('./app/pages/auth/auth.routes')
    },
    
    { path: '**', redirectTo: 'notfound' }
];
