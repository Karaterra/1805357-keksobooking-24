import {createSimilarOffers} from '../data/get-mock-data.js';
import {getSimilarOfferElement} from '../utils/get-similar-offer-elements.js';
import {setNonActiveMode} from '../form/set-non-active-mode.js';
import {setActiveMode} from '../form/set-active-mode.js';

const MAX_OFFERS_QUANTITY = 10;
const offerAddress = document.getElementById('address');
const adForm = document.querySelector('.ad-form');
const filterPanel = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const filterFieldsets = filterPanel.querySelectorAll('fieldset');
const filterSelects = filterPanel.querySelectorAll('select');

setNonActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);

const initMap = (map, mainPinMarker) => {
  map = L.map('map')
    .on('load', () => {
      setActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);
    })
    .setView({
      lat: 35.6895,
      lng: 139.692,
    }, 10);

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

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(
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

    return offerAddress.value = `${coordsPinMarker.lat.toFixed(5)}, ${coordsPinMarker.lng.toFixed(5)}`;

  });

  mainPinMarker.addTo(map);

};

const createSimilarPins = (map) => {
  const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

  const createCustomPopup = (point) => {
    const similarListElement = document.querySelector('#card').content.querySelector('.popup');
    const popupElement = similarListElement.cloneNode(true);

    const outputCard = getSimilarOfferElement(point);
    popupElement.innerHTML='';

    popupElement.append(outputCard);

    return popupElement;
  };

  similarCards.forEach((point) => {
    const {locationCoords: {lat, lng}} = point;

    const similarPinIcon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    const marker = L.marker({
      lat,
      lng,
    },
    {
      icon: similarPinIcon,
    });

    marker
      .addTo(map)
      .bindPopup(createCustomPopup(point));
  });
};

const resetMap = (map, mainPinMarker) => {
  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.692,
  });

  map.setView({
    lat: 35.6895,
    lng: 139.692,
  }, 16);
};

export {initMap, createSimilarPins, resetMap};
