import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LandingComponent } from './layout/landing/landing.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LandingComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// export function generateJWToken(service: MenuService) {
//   let loginInfo: any = {
//     loginId: 'ApiLogin',
//     password: 'abc@123',
//   };
//   return () => {
//     return service.generateJWToken(loginInfo).subscribe((result) => {
//       console.log('JWT_TOKEN_KEY', result.responseResult);
//       sessionStorage.setItem('JWT_TOKEN_KEY', result.responseResult);
//     });
//   };
// }
