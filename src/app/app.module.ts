import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { CreateRouteComponent } from './routes/create-route/create-route.component';
import { DashboardRouteComponent } from './routes/dashboard-route/dashboard-route.component';
import { NotFoundRouteComponent } from './routes/not-found-route/not-found-route.component';
import { CustomerElementComponent } from './components/customer-element/customer-element.component';
import { CustomerDetailsRouteComponent } from './routes/customer-details-route/customer-details-route.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditElementComponent } from './components/edit-element/edit-element.component';
import * as ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [
    AppComponent,
    HomeRouteComponent,
    CreateRouteComponent,
    DashboardRouteComponent,
    NotFoundRouteComponent,
    CustomerElementComponent,
    CustomerDetailsRouteComponent,
    DashboardComponent,
    EditElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
