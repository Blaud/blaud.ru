import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/classes/auth.guard';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component';
import {OnlineShopLayoutComponent} from './shared/layouts/online-shop-layout/online-shop-layout.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {OverviewPageComponent} from './overview-page/overview-page.component';
import {ResumePageComponent} from './resume-page/resume-page.component';
import {AnalyticsPageComponent} from './analytics-page/analytics-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {CategoriesPageComponent} from './categories-page/categories-page.component';
import {CategoriesFormComponent} from './categories-page/categories-form/categories-form.component';
import {IndexPageComponent} from './index-page/index-page.component';

const routes: Routes = [
  {
    path: 'online_shop',
    component: AuthLayoutComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: 'online_shop',
    component: OnlineShopLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OverviewPageComponent},
      {path: 'analytics', component: AnalyticsPageComponent},
      {path: 'history', component: HistoryPageComponent},
      {path: 'order', component: OrderPageComponent},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'categories/new', component: CategoriesFormComponent},
      {path: 'categories/:id', component: CategoriesFormComponent}
    ]
  },
  {
    path: 'resume',
    component: ResumePageComponent
  },
  {
    path: '',
    component: IndexPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
