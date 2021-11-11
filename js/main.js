import {setNonActiveMode} from './form/set-non-active-mode.js';
import {initMap, renderSimilarCards} from './map/map-script.js';
// import {createLoader} from './api/api.js';
// import {createSimilarOffers} from './data/get-mock-data.js';

// const MAX_OFFERS_QUANTITY = 10;

const adForm = document.querySelector('.ad-form');
const filterPanel = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const filterFieldsets = filterPanel.querySelectorAll('fieldset');
const filterSelects = filterPanel.querySelectorAll('select');

setNonActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);

// const loadSimilarOffers = createLoader();
// const similarCards2 = loadSimilarOffers(MAX_OFFERS_QUANTITY);

fetch(
  'https://24.javascript.pages.academy/keksobooking/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => response.json())
  .then((dataCards) => {
    renderSimilarCards(dataCards);
    return dataCards;
  });

initMap(dataCards);
