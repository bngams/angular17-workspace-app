import { Routes } from '@angular/router';
import { AuthComponent } from 'auth';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent /* providers */},
    { path: 'auth', component: AuthComponent, /* canActivate: [ VisitorOnlyFn ] */ },
    { path: '**', component: NotFoundComponent} // /!\ at the end
];
