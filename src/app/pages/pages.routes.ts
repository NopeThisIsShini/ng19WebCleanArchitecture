import { Routes } from '@angular/router';
import { LoginComponent, SignupComponent } from './auth';

export default [
    { path: 'documentation', component: LoginComponent },
    { path: 'crud', component: SignupComponent },
    // { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
