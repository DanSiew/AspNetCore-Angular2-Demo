import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent }   from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);