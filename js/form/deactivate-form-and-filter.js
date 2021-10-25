const deactivateFormAndFilter = (formFields, filterFields) => {

  formFields.classList.add('ad-form--disabled');
  const formFieldsets = formFields.querySelectorAll('fieldset');
  for (const formFieldset of formFieldsets) {
    formFieldset.setAttribute('disabled', true);
  }
  filterFields.classList.add('map__filters--disabled');
  const filterFieldsets = filterFields.querySelectorAll('fieldset');
  const filterSelects = filterFields.querySelectorAll('select');
  for (const filterSelect of filterSelects) {
    filterSelect.setAttribute('disabled', true);
  }
  for (const filterFieldset of filterFieldsets) {
    filterFieldset.setAttribute('disabled', true);
  }
};

export {deactivateFormAndFilter};
