import {createSimilarOffers} from './data/get-mock-data.js';
import {getSimilarOfferElement} from './utils/get-similar-offer-elements.js';
import {deactivateFormAndFilter} from './form/deactivate-form-and-filter.js';
import {activateFormAndFilter} from './form/activate-form-and-filter.js';
import {changeValueTypeToPrice, changeValueRoomsToGuests} from './form/form.js';

const MAX_OFFERS_QUANTITY = 1;

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

const similarListElement = document.querySelector('#map-canvas');
const similarListFragment = document.createDocumentFragment();

similarCards.forEach((similarCard) => {
  const outputCard = getSimilarOfferElement(similarCard);
  similarListFragment.appendChild(outputCard);
});

similarListElement.appendChild(similarListFragment);

const formField = document.querySelector('.ad-form');
const filterField = document.querySelector('.map__filters');
document.addEventListener('DOMContentLoaded', () => {
  deactivateFormAndFilter(formField, filterField);

});
document.addEventListener('click', () => {
  activateFormAndFilter(formField, filterField);
});

changeValueTypeToPrice();
changeValueRoomsToGuests();
