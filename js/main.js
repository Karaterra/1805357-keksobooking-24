import {createSimilarOffers} from '../data/get-mock-data.js';
import {getSimilarOfferElement} from '../utils/get-similar-offer-elements.js';

const MAX_OFFERS_QUANTITY = 1;

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

const similarListElement = document.querySelector('#map-canvas');
const similarListFragment = document.createDocumentFragment();

similarCards.forEach((similarCard) => {
  const outputCard = getSimilarOfferElement(similarCard);
  similarListFragment.appendChild(outputCard);
  console.log(similarListFragment);
});

similarListElement.appendChild(similarListFragment);
