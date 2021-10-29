import {validateForm} from './validate-form.js';

const setActiveMode = (adForm, filterPanel) => {

  adForm.classList.remove('ad-form--disabled');
  const formFieldsets = adForm.querySelectorAll('fieldset');
  for (const formFieldset of formFieldsets) {
    formFieldset.removeAttribute('disabled');
  }
  filterPanel.classList.remove('map__filters--disabled');
  const filterFieldsets = filterPanel.querySelectorAll('fieldset');
  const filterSelects = filterPanel.querySelectorAll('select');
  for (const filterSelect of filterSelects) {
    filterSelect.removeAttribute('disabled');
  }
  for (const filterFiedset of filterFieldsets) {
    filterFiedset.removeAttribute('disabled');
  }
};

validateForm();

export {setActiveMode};
