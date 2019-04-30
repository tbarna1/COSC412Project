import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about-page/about.component';
import { HomeComponent } from './home-page/home.component';
import { CartComponent } from './cart-page/cart.component';
import { ProductsComponent } from './products-page/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
  	{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
