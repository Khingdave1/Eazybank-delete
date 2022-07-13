import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralLedgerRoutingModule } from './general-ledger-routing.module';

import { GeneralLedgerDashboardComponent } from './general-ledger-dashboard.component';


@NgModule({
  declarations: [

    GeneralLedgerDashboardComponent
  ],
  imports: [
    CommonModule,
    GeneralLedgerRoutingModule
  ]
})
export class GeneralLedgerModule { }
