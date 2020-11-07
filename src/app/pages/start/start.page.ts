import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

//Import a local service for apps
import { PlacesService } from 'src/app/services/places.service';
import { Observable } from 'rxjs';


//It page uses a modal for show the weather of chosen city
import { ModalController } from '@ionic/angular';
import { WeatherPagePage } from '../weather-page/weather-page.page';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {


  places: any[];
  search: string;

  constructor( private placesService : PlacesService ,
               private modalController: ModalController ,
               private menu: MenuController) { }





  //Get the list of countries
  ngOnInit() {
    this.placesService.getPlaces()
      .subscribe( (place: any[]) =>{
        /*Guardamos los posts en el array de mensajes*/
        this.places = place;

      });
  }

  onSearchChange( event ){

    this.search = event.detail.value;
  }


  //Show modal
  async showModal(cityName , countryCode){
    const modal = await this.modalController.create({
      /*Se debe poner como argumento la pagina a la que dirigira el modal*/
      component: WeatherPagePage,
      //Here is info that send to the modal
      componentProps: {
        city: cityName,
        country: countryCode
      }
    });
    await modal.present();
  }


openFirst() {
  this.menu.enable(true, 'first');
  this.menu.open('first');
  console.log("Mierda");
}

openEnd() {
  this.menu.open('end');
}

openCustom() {
  this.menu.enable(true, 'custom');
  this.menu.open('custom');
}




}
