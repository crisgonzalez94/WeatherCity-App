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
  //Var for show the progressbar
  showLoader: boolean = true;

  constructor(private modalController: ModalController ,  private weatherSevice : WeatherService ) { }

  ngOnInit(){
    this.getWeather();
  }

  //Get weather from service and api
  getWeather(){
    this.showProgressBar();

    this.weatherSevice.getWeather(this.city).subscribe( (resp:WeatherDate) => {
      this.weather = resp;

      this.hideProgressBar();
    });

  }

  closeModal(){
    /*Cerrar Modal sin Argumentos*/
    this.modalController.dismiss();
  }

  //Show and hide progressbar
  showProgressBar(){
    this.showLoader = true;
  }
  hideProgressBar(){
    this.showLoader = false;
  }

}
