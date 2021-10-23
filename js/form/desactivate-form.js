const desactivateForm = (intoForm, intoMapFilter) => {

  intoForm.classList.add('ad-form--disabled');
  const allElementsForm = intoForm.querySelectorAll('fieldset');
  for (const elementForm of allElementsForm) {
    elementForm.setAttribute('disabled', 'disabled');
  }
  intoMapFilter.classList.add('map__filters--disabled');
  const allElementsOfFilterFieldset = intoMapFilter.querySelectorAll('fieldset');
  const allElementsOfFilterSelect = intoMapFilter.querySelectorAll('select');
  for (const elementOfFilter of allElementsOfFilterSelect) {
    elementOfFilter.setAttribute('disabled', 'disabled');
  }
  for (const elementOfFilter of allElementsOfFilterFieldset) {
    elementOfFilter.setAttribute('disabled', 'disabled');
  }
};

export {desactivateForm};
