import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { BusinessComponent } from './components/business/business.component';
import { ContactComponent } from './components/contact/contact.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { GuideComponent } from './components/guide/guide.component';
import { DataServices } from './data.serveces';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    BusinessComponent,
    ContactComponent,
    FooterComponent,
    CarouselComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'business', component:BusinessComponent},
      {path:'contact', component:ContactComponent},
      {path:'services', component:ServicesComponent},
      {path:'**', redirectTo:'/',pathMatch:'full'},
    ]),
    FormsModule,
    HttpClientModule,
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
