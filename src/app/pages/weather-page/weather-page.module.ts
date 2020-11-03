import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherPagePageRoutingModule } from './weather-page-routing.module';

import { WeatherPagePage } from './weather-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherPagePageRoutingModule
  ],
  declarations: [WeatherPagePage]
})
export class WeatherPagePageModule {}
