import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrl: './btn-my-location.component.css',
})
export class BtnMyLocationComponent {
  constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady)
      throw Error('No hay ubicacion de usuario');

    if (!this.mapService.isMapReady)
      throw Error('No se a inicializado el mapa');

    this.mapService.flyTo(this.placesService.useLocation!);
  }
}
