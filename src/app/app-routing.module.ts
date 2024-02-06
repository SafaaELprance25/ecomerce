import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HOMEComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { ShopGridComponent } from './component/shop-grid/shop-grid.component';
import { PagesComponent } from './component/pages/pages.component';
import { BlogSingleSidebarComponent } from './component/blog-single-sidebar/blog-single-sidebar.component';import { ProductsComponent } from './component/products/products.component';
import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
  const routes: Routes = [
  {path:"",component: HOMEComponent},

  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:"ShopGrid" , component:ShopGridComponent},
  {path:" Blog" , component: BlogComponent},
  {path:" Pages" , component: PagesComponent},
  {path:"BlogSingleSidebar" , component:BlogSingleSidebarComponent}, 
{path:"Checkout",component:CheckoutComponent},
 {path:"Contact",component: ContactComponent}, 
 {path:" Footer",component:FooterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
