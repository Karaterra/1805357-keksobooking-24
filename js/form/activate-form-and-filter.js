const activateFormAndFilter = (formField, filterField) => {

  formField.classList.remove('ad-form--disabled');
  const formFieldsets = formField.querySelectorAll('fieldset');
  for (const formFieldset of formFieldsets) {
    formFieldset.removeAttribute('disabled');
  }
  filterField.classList.remove('map__filters--disabled');
  const filterFieldsets = filterField.querySelectorAll('fieldset');
  const filterSelects = filterField.querySelectorAll('select');
  for (const filterSelect of filterSelects) {
    filterSelect.removeAttribute('disabled');
  }
  for (const filterFiedset of filterFieldsets) {
    filterFiedset.removeAttribute('disabled');
  }
};

export {activateFormAndFilter};
