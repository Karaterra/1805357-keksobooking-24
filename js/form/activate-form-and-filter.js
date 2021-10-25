const activateFormAndFilter = (formFields, filterFields) => {

  formFields.classList.remove('ad-form--disabled');
  const formFieldsets = formFields.querySelectorAll('fieldset');
  for (const formFieldset of formFieldsets) {
    formFieldset.removeAttribute('disabled');
  }
  filterFields.classList.remove('map__filters--disabled');
  const filterFieldsets = filterFields.querySelectorAll('fieldset');
  const filterSelects = filterFields.querySelectorAll('select');
  for (const filterSelect of filterSelects) {
    filterSelect.removeAttribute('disabled');
  }
  for (const filterFiedset of filterFieldsets) {
    filterFiedset.removeAttribute('disabled');
  }
};

export {activateFormAndFilter};
