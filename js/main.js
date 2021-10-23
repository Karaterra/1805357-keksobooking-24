import {createSimilarOffers} from './data/get-mock-data.js';
import {getSimilarOfferElement} from './utils/get-similar-offer-elements.js';
import {desactivateForm} from './form/desactivate-form.js';
import {activateForm} from './form/activate-form.js';

const MAX_OFFERS_QUANTITY = 1;

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

const similarListElement = document.querySelector('#map-canvas');
const similarListFragment = document.createDocumentFragment();

similarCards.forEach((similarCard) => {
  const outputCard = getSimilarOfferElement(similarCard);
  similarListFragment.appendChild(outputCard);
});

similarListElement.appendChild(similarListFragment);

const intoForm = document.querySelector('.ad-form');
const intoMapFilter = document.querySelector('.map__filters');
document.addEventListener('DOMContentLoaded', () => {
  desactivateForm(intoForm, intoMapFilter);

});
document.addEventListener('click', () => {
  activateForm(intoForm, intoMapFilter);
});
