import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
    {path : 'about', component: AboutComponent},
    // {path: '', component: AppComponent, pathMatch: 'full'},
    {path: '**', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: false});
