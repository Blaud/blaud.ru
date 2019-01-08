import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineShopLayoutComponent } from './online-shop-layout.component';

describe('OnlineShopLayoutComponent', () => {
  let component: OnlineShopLayoutComponent;
  let fixture: ComponentFixture<OnlineShopLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ OnlineShopLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineShopLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
