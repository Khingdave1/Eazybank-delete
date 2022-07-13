import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralLedgerDashboardComponent } from './general-ledger-dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: GeneralLedgerDashboardComponent,
    //canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralLedgerRoutingModule { }
