import {getSimilarOfferElement} from '../utils/get-similar-offer-elements.js';
import {setActiveMode} from '../form/set-active-mode.js';

const offerAddress = document.getElementById('address');
const adForm = document.querySelector('.ad-form');
const filterPanel = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const filterFieldsets = filterPanel.querySelectorAll('fieldset');
const filterSelects = filterPanel.querySelectorAll('select');
const initCoordinates = {lat: 35.6895, lng: 139.692, zoom: 10};

const map = L.map('map');
const similarOffersMarkersLayer = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.on('moveend', (evt) => {
  const coordsPinMarker = evt.target.getLatLng();

  offerAddress.value = `${coordsPinMarker.lat.toFixed(5)}, ${coordsPinMarker.lng.toFixed(5)}`;

});

mainPinMarker.addTo(map);

const similarPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const createCustomPopup = (point) => {
  const similarListElement = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = similarListElement.cloneNode(true);

  const outputCard = getSimilarOfferElement(point);
  popupElement.innerHTML='';

  popupElement.append(outputCard);

  return popupElement;
};

const setMapView = (lat, lng, zoom) => {
  map.setView({
    lat,
    lng,
  },
  zoom,
  );
};

const setMainPinMarkerCoordinates = (lat, lng) => {
  mainPinMarker.setLatLng({
    lat,
    lng,
  });
};

const renderSimilarCards = (similarCards) => {
  similarOffersMarkersLayer.clearLayers();
  similarCards.forEach((point) => {
    const {locationCoords: {lat, lng}} = point;

    const marker = L.marker({
      lat,
      lng,
    },
    {
      icon: similarPinIcon,
    });

    marker
      .addTo(similarOffersMarkersLayer)
      .bindPopup(createCustomPopup(point));
  });
};

const initMap = (similarCards) => {
  map.on ('load', () => {
    setActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);
  });

  setMapView (initCoordinates.lat, initCoordinates.lng, initCoordinates.zoom);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token',
    },
  ).addTo(map);

  renderSimilarCards(similarCards);

};

const resetMap = () => {
  setMapView (initCoordinates.lat, initCoordinates.lng, initCoordinates.zoom);
  setMainPinMarkerCoordinates(initCoordinates.lat, initCoordinates.lng);
  map.closePopup();
};

export {initMap, resetMap, renderSimilarCards};
