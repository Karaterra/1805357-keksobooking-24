import {setNonActiveMode} from './form/set-non-active-mode.js';
import {initMap} from './map/map-script.js';
import {createSimilarOffers} from './data/get-mock-data.js';

const MAX_OFFERS_QUANTITY = 10;

const adForm = document.querySelector('.ad-form');
const filterPanel = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const filterFieldsets = filterPanel.querySelectorAll('fieldset');
const filterSelects = filterPanel.querySelectorAll('select');

setNonActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

initMap(similarCards);
