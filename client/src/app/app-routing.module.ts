import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./shared/classes/auth.guard";
import {LoginPageComponent} from "./login-page/login-page.component";
import {AuthLayoutComponent} from "./shared/layouts/auth-layout/auth-layout.component";
import {OnlineShopLayoutComponent} from "./shared/layouts/online-shop-layout/online-shop-layout.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {OverviewPageComponent} from "./overview-page/overview-page.component";

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {
    path: '',
    component: OnlineShopLayoutComponent, canActivate: [AuthGuard], children: [
      {path: 'overview', component: OverviewPageComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
