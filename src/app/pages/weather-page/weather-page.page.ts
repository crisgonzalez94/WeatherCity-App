import { Component, Input , OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

//Import the servise of Weathers
import { WeatherService } from 'src/app/services/weather.service';
//Import the interfaces
import { WeatherDate } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.page.html',
  styleUrls: ['./weather-page.page.scss'],
})
export class WeatherPagePage implements OnInit {

  //Variables for show weather
  icono:string;
  weather:WeatherDate;
  city:string;

  constructor(private modalController: ModalController ,  private weatherSevice : WeatherService ) { }

  ngOnInit() {

    //Get the weather , with cityName as param
    this.weatherSevice.getWeather(this.city).subscribe( (resp:WeatherDate) => {

      this.weather = resp;




    });

  }

  close(){
    /*Cerrar Modal sin Argumentos*/
    this.modalController.dismiss();
  }


}
