import { NotFoundRouteComponent } from './routes/not-found-route/not-found-route.component';
import { CreateRouteComponent } from './routes/create-route/create-route.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { DashboardRouteComponent } from './routes/dashboard-route/dashboard-route.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsRouteComponent } from './routes/customer-details-route/customer-details-route.component';
const routes: Routes = [
  {
    path: '',
    component: HomeRouteComponent,
  },
  {
    path: 'create',
    component: CreateRouteComponent,
  },
  {
    path: 'dashboard',
    component: DashboardRouteComponent,
  },
  {
    path: 'details/:id',
    component: CustomerDetailsRouteComponent,
  },
  {
    path: 'not-found',
    component: NotFoundRouteComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
