const deactivateFormAndFilter = (formField, filterField) => {

  formField.classList.add('ad-form--disabled');
  const formFieldsets = formField.querySelectorAll('fieldset');
  for (const formFieldset of formFieldsets) {
    formFieldset.setAttribute('disabled', true);
  }
  filterField.classList.add('map__filters--disabled');
  const filterFieldsets = filterField.querySelectorAll('fieldset');
  const filterSelects = filterField.querySelectorAll('select');
  for (const filterSelect of filterSelects) {
    filterSelect.setAttribute('disabled', true);
  }
  for (const filterFieldset of filterFieldsets) {
    filterFieldset.setAttribute('disabled', true);
  }
};

export {deactivateFormAndFilter};
