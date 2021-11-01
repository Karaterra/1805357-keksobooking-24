import {validateForm} from './validate-form.js';

const setActiveMode = (adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects) => {

  adForm.classList.remove('ad-form--disabled');
  for (const formFieldset of formFieldsets) {
    formFieldset.removeAttribute('disabled');
  }
  filterPanel.classList.remove('map__filters--disabled');
  for (const filterSelect of filterSelects) {
    filterSelect.removeAttribute('disabled');
  }
  for (const filterFiedset of filterFieldsets) {
    filterFiedset.removeAttribute('disabled');
  }
};

validateForm();

export {setActiveMode};
