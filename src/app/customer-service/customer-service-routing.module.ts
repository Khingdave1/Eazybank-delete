import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerServiceDashboardComponent } from './customer-service-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: CustomerServiceDashboardComponent,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerServiceRoutingModule { }
