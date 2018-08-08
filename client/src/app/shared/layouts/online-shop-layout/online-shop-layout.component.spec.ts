import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineShopLayoutComponent } from './site-layout.component';

describe('OnlineShopLayoutComponent', () => {
  let component: OnlineShopLayoutComponent;
  let fixture: ComponentFixture<OnlineShopLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
