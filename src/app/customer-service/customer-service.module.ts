import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerServiceRoutingModule } from './customer-service-routing.module';
import { CustomerServiceDashboardComponent } from './customer-service-dashboard.component';


@NgModule({
  declarations: [
    CustomerServiceDashboardComponent
  ],
  imports: [
    CommonModule,
    CustomerServiceRoutingModule
  ]
})
export class CustomerServiceModule { }
