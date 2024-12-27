import { Routes } from '@angular/router';
import LoginComponent from './components/login-page/login-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component'),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component'),
  },
  { path: '**', redirectTo: 'not-found' },
];
