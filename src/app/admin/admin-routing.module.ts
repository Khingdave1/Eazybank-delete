import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AddCurrencyComponent } from './components/setups/currency/add-currency/add-currency.component';
import { DisplayCurrenciesComponent } from './components/setups/currency/display-currencies/display-currencies.component';
import { EditCurrencyComponent } from './components/setups/currency/edit-currency/edit-currency.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'add-currency',
    component: AddCurrencyComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'display-currencies',
    component: DisplayCurrenciesComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'edit-currency',
    component: EditCurrencyComponent,
    //canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
