import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from'./home/home.component';
import {MenuComponent} from './menu/menu.component';
import {SpecialsComponent} from './specials/specials.component';
import {GalleryComponent} from './gallery/gallery.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:' menu',component:MenuComponent},
  {path:'specials',component:SpecialsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'order',component:OrderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
