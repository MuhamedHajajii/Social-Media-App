import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { logUserGuard } from './core/guards/log-user.guard';
import { detailsResolver } from './core/resolvers/details.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/auth-layout/auth-layout.component').then(
        (e) => e.AuthLayoutComponent
      ),
    canActivate: [logUserGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        loadComponent: () =>
          import('./auth/components/sing-in/sing-in.component').then(
            (e) => e.SingInComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/components/sing-up/sing-up.component').then(
            (e) => e.SingUpComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout.component').then(
        (e) => e.MainLayoutComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'timeline',
        loadComponent: () =>
          import('./pages/main/timeline/timeline.component').then(
            (e) => e.TimelineComponent
          ),
      },
      {
        path: 'post-details/:id',
        loadComponent: () =>
          import('./pages/main/post-details/post-details.component').then(
            (e) => e.PostDetailsComponent
          ),
        resolve: { hamada: detailsResolver },
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/main/not-found/not-found.component').then(
        (e) => e.NotFoundComponent
      ),
  },
];
