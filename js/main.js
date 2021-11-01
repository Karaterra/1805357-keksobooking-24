import {createSimilarOffers} from './data/get-mock-data.js';
import {getSimilarOfferElement} from './utils/get-similar-offer-elements.js';
import {setNonActiveMode} from './form/set-non-active-mode.js';
import {setActiveMode} from './form/set-active-mode.js';

const MAX_OFFERS_QUANTITY = 1;

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

const similarListElement = document.querySelector('#map-canvas');
const similarListFragment = document.createDocumentFragment();

similarCards.forEach((similarCard) => {
  const outputCard = getSimilarOfferElement(similarCard);
  similarListFragment.appendChild(outputCard);
});

similarListElement.appendChild(similarListFragment);

const adForm = document.querySelector('.ad-form');
const filterPanel = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const filterFieldsets = filterPanel.querySelectorAll('fieldset');
const filterSelects = filterPanel.querySelectorAll('select');
document.addEventListener('DOMContentLoaded', () => {
  setNonActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);

});
document.addEventListener('click', () => {
  setActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);
});

