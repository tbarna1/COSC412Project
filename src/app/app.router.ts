import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about-page/about.component";
import { ProductsComponent } from './products-page/products.component';
import { HomeComponent } from './home-page/home.component';
import { CartComponent } from './cart-page/cart.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export const router: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
	{ path: "about", component: AboutComponent },
	{ path: "products", component: ProductsComponent },
	{ path: "home", component: HomeComponent },
	{ path: "cart", component: CartComponent },
	{ path: "sidebar-component", component: SidebarComponent },
	
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
