// import {createSimilarOffers} from './data/get-mock-data.js';
// import {getSimilarOfferElement} from './utils/get-similar-offer-elements.js';

import {createSimilarPins, initMap} from './map/map-script.js';
// import {setActiveMode} from './form/set-active-mode.js';

// const MAX_OFFERS_QUANTITY = 1;

// const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

// const similarListElement = document.querySelector('#map-canvas');
// const similarListFragment = document.createDocumentFragment();

// similarCards.forEach((similarCard) => {
//   const outputCard = getSimilarOfferElement(similarCard);
//   similarListFragment.appendChild(outputCard);
// });

// similarListElement.appendChild(similarListFragment);

// const adForm = document.querySelector('.ad-form');
// const filterPanel = document.querySelector('.map__filters');
// const formFieldsets = adForm.querySelectorAll('fieldset');
// const filterFieldsets = filterPanel.querySelectorAll('fieldset');
// const filterSelects = filterPanel.querySelectorAll('select');

// map.addEventListener('load', () => {
//   console.log('Карта инициализирована2');
//   // if (bestVar2) {
//   console.log('Карта инициализирована3');
//   setActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);
//   // }
// });
initMap();
createSimilarPins();
