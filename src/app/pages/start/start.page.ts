import { Component, OnInit } from '@angular/core';

//Import a local service for apps
import { PlacesService } from 'src/app/services/places.service';
import { Observable } from 'rxjs';





//Import the interfaces
import { WeatherDate } from 'src/app/interfaces/interfaces';
import { Weather } from 'src/app/interfaces/interfaces';

//It page uses a modal for show the weather of chosen city
import { ModalController } from '@ionic/angular';
import { WeatherPagePage } from '../weather-page/weather-page.page';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  weather: WeatherDate;

  places: any[];

  search: string;

  constructor( private placesService : PlacesService , private modalController: ModalController) { }

  ngOnInit() {

    this.placesService.getPlaces()
      .subscribe( (place: any[]) =>{
        /*Guardamos los posts en el array de mensajes*/
        this.places = place;

        console.log(this.places);
      });





  }

  onSearchChange( event ){

    this.search = event.detail.value;
  }


  async showModal(cityName){
    const modal = await this.modalController.create({
      /*Se debe poner como argumento la pagina a la que dirigira el modal*/
      component: WeatherPagePage,
      //Here is info that send to the modal
      componentProps: {
        city: cityName,
      }
    });
    await modal.present();
  }

}
