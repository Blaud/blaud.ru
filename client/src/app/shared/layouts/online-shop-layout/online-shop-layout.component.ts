import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MaterialService} from "../../classes/material.service";

@Component({
  selector: 'app-online-shop-layout',
  templateUrl: './online-shop-layout.component.html',
  styleUrls: ['./online-shop-layout.component.css']
})
export class OnlineShopLayoutComponent implements AfterViewInit {

  @ViewChild('floating') floatingRef: ElementRef;

  links = [
    {url: '/online_shop/overview', name: 'Обзор'},
    {url: '/online_shop/analytics', name: 'Аналитика'},
    {url: '/online_shop/history', name: 'История'},
    {url: '/online_shop/order', name: 'Добавить заказ'},
    {url: '/online_shop/categories', name: 'Ассортимент'}
  ];

  constructor(private auth: AuthService,
              private router: Router) {
  }

  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef)
  }

  logout(event: Event) {
    event.preventDefault();
    this.auth.logout();
    this.router.navigate(['online_shop/login'])
  }

}
