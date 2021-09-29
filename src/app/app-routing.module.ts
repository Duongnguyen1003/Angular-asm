import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ChooseTrainComponent } from './pages/choose-train/choose-train.component';
import { ChooseCarComponent } from './pages/choose-car/choose-car.component';
import { ChooseSeatComponent } from './pages/choose-seat/choose-seat.component';
import { InformationComponent } from './pages/information/information.component';
import { PayComponent } from './pages/pay/pay.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlaceManagerComponent } from './pages/place-manager/place-manager.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'train',
    component: ChooseTrainComponent
  },
  {
    path: 'car',
    component: ChooseCarComponent
  },
  {
    path: 'seat',
    component: ChooseSeatComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'placemanager',
    component: PlaceManagerComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
