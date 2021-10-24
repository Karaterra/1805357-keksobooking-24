import {createSimilarOffers} from './data/get-mock-data.js';
import {getSimilarOfferElement} from './utils/get-similar-offer-elements.js';
import {desactivateFormAndFilter} from './form/desactivate-form-and-filter.js';
import {activateFormAndFilter} from './form/activate-form-and-filter.js';

const MAX_OFFERS_QUANTITY = 1;

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

const similarListElement = document.querySelector('#map-canvas');
const similarListFragment = document.createDocumentFragment();

similarCards.forEach((similarCard) => {
  const outputCard = getSimilarOfferElement(similarCard);
  similarListFragment.appendChild(outputCard);
});

similarListElement.appendChild(similarListFragment);

const formFields = document.querySelector('.ad-form');
const filterFields = document.querySelector('.map__filters');
document.addEventListener('DOMContentLoaded', () => {
  desactivateFormAndFilter(formFields, filterFields);

});
document.addEventListener('click', () => {
  activateFormAndFilter(formFields, filterFields);
});
