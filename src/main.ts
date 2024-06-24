import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const Mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken =
  'pk.eyJ1Ijoiam9obmVyaWtjIiwiYSI6ImNrb3VmeXh3djBpNTkyd3BoODAycTk4bmYifQ.dRn9kQ4Ql6GtSUidW-PCVg';

if (!navigator.geolocation) {
  alert('Navegador no soporte la Geolocation');
  throw new Error('Navegador no soporte la Geolocation');
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));
