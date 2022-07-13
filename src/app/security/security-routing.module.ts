import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityDashboardComponent } from './security-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: SecurityDashboardComponent,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
