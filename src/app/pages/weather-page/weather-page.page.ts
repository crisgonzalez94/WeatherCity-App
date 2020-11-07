import { Component, Input , OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

//Import the servise of Weathers
import { WeatherService } from 'src/app/services/weather.service';
//Import the interfaces
import { WeatherDate } from 'src/app/interfaces/interfaces';
import { WeatherWeekDate } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.page.html',
  styleUrls: ['./weather-page.page.scss'],
})
export class WeatherPagePage implements OnInit {

  //Variables for show weather
  icono:string;
  weather:WeatherDate;
  weekWeather:WeatherWeekDate;
  city:string;
  country: string;
  //Var for show the progressbar
  showLoader: boolean = true;

  //Variables for get date
  year: number;
  month: number;
  day: number;
  dayOfWeek:number;
  date = new Date;
  week: string[] = [];

  constructor(private modalController: ModalController ,  private weatherSevice : WeatherService) { }

  ngOnInit(){
    this.getWeather();
    this.getWeekWeather();
  }

  //Get weather from service and api
  getWeather(){
    this.showProgressBar();

    this.weatherSevice.getWeather(this.city , this.country).subscribe( (resp:WeatherDate) => {
      this.weather = resp;

      //Get date
      this.year = parseInt(this.weather.data[0].datetime.split('-')[0]);
      this.month = parseInt(this.weather.data[0].datetime.split('-')[1]);
      this.day = parseInt(this.weather.data[0].datetime.split('-')[2]);
      //Is there an error in this api , the month is one more
      for (let i = 0; i < 7; i++) {
        this.date = new Date(this.year , this.month -1 , this.day + i , 0 , 0);
        this.dayOfWeek = this.date.getDay();
        switch (this.dayOfWeek) {
          case 0: this.week.push("Su");break;
          case 1: this.week.push("Mo");break;
          case 2: this.week.push("Tu");break;
          case 3: this.week.push("We");break;
          case 4: this.week.push("Th");break;
          case 5: this.week.push("Fr");break;
          case 6: this.week.push("Sa");break;
        }
      }

      console.log(this.week);

      this.hideProgressBar();
    });
  }


  getWeekWeather(){
    this.weatherSevice.getWeekWeather(this.city , this.country).subscribe( (resp:WeatherWeekDate) => {
      this.weekWeather = resp;
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
