import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(arreglo: any[] , texto:string = '' , propiedad:string = ''): any {

    //Si texto esta vacio
    if( texto == ''){
      //Retornar el arreglo talcual
      return arreglo
    }

    //En el caso de que no haya un arreglo con los parametros
    if(!arreglo){
      return arreglo;
    }

    //Poner el texo en minuscula
    texto = texto.toLocaleLowerCase();

    //Filtrar busqueda
    return arreglo.filter(
      /*Ahora retornamos el filtor (hay que verificar que propiedad 
        se va a filtrar la propiedad name del arreglo)*/
      item => item[propiedad].toLowerCase().includes(texto)
    );
  }


}
