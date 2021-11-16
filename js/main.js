import {setNonActiveMode} from './form/set-non-active-mode.js';
import {initMap, renderSimilarCards} from './map/map-script.js';
import {setUserFormSubmit} from './form/validate-form.js';
import {getData} from './api/api.js';
import {confirmPopUp} from './utils/alert.js';
import {mapFilter} from './map/map-filter.js';

const MAX_OFFERS_QUANTITY = 100;

const adForm = document.querySelector('.ad-form');
const filterPanel = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const filterFieldsets = filterPanel.querySelectorAll('fieldset');
const filterSelects = filterPanel.querySelectorAll('select');

setNonActiveMode(adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects);

getData((dataCards) => {
  const filterCards = mapFilter(dataCards, filterSelects);
  initMap(filterCards);
  renderSimilarCards(filterCards.slice(0, MAX_OFFERS_QUANTITY));
});


setUserFormSubmit(confirmPopUp);
