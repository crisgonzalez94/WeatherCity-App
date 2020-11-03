import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(cityName){
    return this.http.get(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=22df51fa8b68413799305f2f2ab46821&units=F&lang=en`);
  }

}
