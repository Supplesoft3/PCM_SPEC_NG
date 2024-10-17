import { Routes } from '@angular/router';
import { Error404Component } from './error-page/error-404/error-404.component';

export const routes: Routes = [
    {
      path: 'release',
      loadChildren: () => import('./release/release.module').then(m => m.ReleaseModule)
    },
    {
      path: 'cds',
      loadChildren: () => import('./cds/cds.module').then(m => m.CdsModule)
    },
    {
      path: 'msp',
      loadChildren: () => import('./msp/msp.module').then(m => m.MspModule)
    },
    {
      path: 'hcr',
      loadChildren: () => import('./hcr/hcr.module').then(m => m.HcrModule)
    },
    {
      path: 'drr',
      loadChildren: () => import('./drr/drr.module').then(m => m.DrrModule)
    },
    {
      path: 'error-404',
      component: Error404Component
    },
    { 
      path: '', 
      redirectTo: '/release', 
      pathMatch: 'full' 
    }, // Default route
    { 
      path: '**', 
      redirectTo: '/error-404' 
    }  // Wildcard route for handling 404 errors
  ];
