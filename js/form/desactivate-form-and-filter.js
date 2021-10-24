const desactivateFormAndFilter = (formFields, filterFields) => {

  formFields.classList.add('ad-form--disabled');
  const allElementsForm = formFields.querySelectorAll('fieldset');
  for (const elementForm of allElementsForm) {
    elementForm.setAttribute('disabled', true);
  }
  filterFields.classList.add('map__filters--disabled');
  const allElementsOfFilterFieldset = filterFields.querySelectorAll('fieldset');
  const allElementsOfFilterSelect = filterFields.querySelectorAll('select');
  for (const elementOfFilter of allElementsOfFilterSelect) {
    elementOfFilter.setAttribute('disabled', true);
  }
  for (const elementOfFilter of allElementsOfFilterFieldset) {
    elementOfFilter.setAttribute('disabled', true);
  }
};

export {desactivateFormAndFilter};
