import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
//import OSM from 'ol/source/OSM';
import GoogleLayer from 'olgm/layer/Google.js';
import {defaults} from 'olgm/interaction.js';
import OLGoogleMaps from 'olgm/OLGoogleMaps.js';

//commented code is for OSM 

// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 0
//   })
// });

var center = [0, 0];

const googleLayer = new GoogleLayer();

const map = new Map({
  target: 'map',
  layers: [
    googleLayer
  ],
  view: new View({
    center: [0, 0],
    zoom: 0
  })
});

var olGM = new OLGoogleMaps({map: map});
olGM.activate();
