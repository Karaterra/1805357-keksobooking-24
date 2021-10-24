const activateFormAndFilter = (formFields, filterFields) => {

  formFields.classList.remove('ad-form--disabled');
  const allElementsForm = formFields.querySelectorAll('fieldset');
  for (const elementForm of allElementsForm) {
    elementForm.removeAttribute('disabled', true);
  }
  filterFields.classList.remove('map__filters--disabled');
  const allElementsOfFilterFieldset = filterFields.querySelectorAll('fieldset');
  const allElementsOfFilterSelect = filterFields.querySelectorAll('select');
  for (const elementOfFilter of allElementsOfFilterSelect) {
    elementOfFilter.removeAttribute('disabled', true);
  }
  for (const elementOfFilter of allElementsOfFilterFieldset) {
    elementOfFilter.removeAttribute('disabled', true);
  }
};

export {activateFormAndFilter};
