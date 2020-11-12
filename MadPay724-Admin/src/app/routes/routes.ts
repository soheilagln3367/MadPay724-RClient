import {Routes, RouterModule } from '@angular/router';
import { PanelComponent } from '../panel/panel.component';

export const AdminRoutes: Routes = [
    {
        path: '', redirectTo: '/auth/login', pathMatch: 'full'
    },
    {
        path: 'auth', redirectTo: '/auth/login', pathMatch: 'full'
    },
    {
        path: 'auth/login', redirectTo: '/auth/login', pathMatch: 'full'
    },
    {
        path: 'auth/register', redirectTo: '/auth/register', pathMatch: 'full'
    },
    {
        path: 'panel', redirectTo: '/panel', pathMatch: 'full'
    },
];
