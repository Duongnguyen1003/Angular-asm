import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

const appRoutes: Routes = [
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
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChooseTrainComponent,
    ChooseCarComponent,
    ChooseSeatComponent,
    InformationComponent,
    PayComponent,
    BlogsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
