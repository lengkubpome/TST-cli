import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { WeightingComponent } from './weighting/weighting.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'weighting', component: WeightingComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);