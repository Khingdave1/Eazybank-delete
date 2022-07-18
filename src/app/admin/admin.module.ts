import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AddCurrencyComponent } from './components/setups/currency/add-currency/add-currency.component';
import { DisplayCurrenciesComponent } from './components/setups/currency/display-currencies/display-currencies.component';
import { EditCurrencyComponent } from './components/setups/currency/edit-currency/edit-currency.component';
import { AddCurrencyRateComponent } from './components/setups/currency-rate/add-currency-rate/add-currency-rate.component';
import { DisplayCurrenciesRateComponent } from './components/setups/currency-rate/display-currencies-rate/display-currencies-rate.component';
import { EditCurrencyRateComponent } from './components/setups/currency-rate/edit-currency-rate/edit-currency-rate.component';
import { AddTransactionCodeComponent } from './components/setups/transaction-code/add-transaction-code/add-transaction-code.component';
import { DisplayTransactionCodeComponent } from './components/setups/transaction-code/display-transaction-code/display-transaction-code.component';
import { EditTransactionCodeComponent } from './components/setups/transaction-code/edit-transaction-code/edit-transaction-code.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AddCurrencyComponent,
    DisplayCurrenciesComponent,
    EditCurrencyComponent,
    AddCurrencyRateComponent,
    DisplayCurrenciesRateComponent,
    EditCurrencyRateComponent,
    AddTransactionCodeComponent,
    DisplayTransactionCodeComponent,
    EditTransactionCodeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
