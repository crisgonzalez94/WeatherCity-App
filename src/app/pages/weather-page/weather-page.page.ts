import { Component, Input , OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

//Import the servise of Weathers
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.page.html',
  styleUrls: ['./weather-page.page.scss'],
})
export class WeatherPagePage implements OnInit {



  constructor(private modalController: ModalController ,  private weatherSevice : WeatherService ) { }

  ngOnInit() {

    //Get the weather , with cityName as param
    this.weatherSevice.getWeather(this.city).subscribe( resp => {
      this.weather = resp.data[0];
      console.log(this.weather);
    });

  }

  close(){
    /*Cerrar Modal sin Argumentos*/
    this.modalController.dismiss();
  }


}
