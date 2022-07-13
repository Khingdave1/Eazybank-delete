import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LandingComponent } from './layout/landing/landing.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: LandingComponent },
 
  {
    path: 'cp',
    component: LandingComponent,
    // canActivate: [AppModuleGuard],
    children: [
      {
        path: '',
        component: DashboardComponent,
      },

      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'shared',
        loadChildren: () =>
          import('./shared/shared.module').then((m) => m.SharedModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'security',
        loadChildren: () =>
          import('./security/security.module').then((m) => m.SecurityModule),
      },
      {
        path: 'general-ledger',
        loadChildren: () =>
          import('./general-ledger/general-ledger.module').then(
            (m) => m.GeneralLedgerModule
          ),
      },
      {
        path: 'customer-service',
        loadChildren: () =>
          import('./customer-service/customer-service.module').then(
            (m) => m.CustomerServiceModule
          ),
      },
    ]},


  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
