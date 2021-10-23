const activateForm = (intoForm, intoMapFilter) => {

  intoForm.classList.remove('ad-form--disabled');
  const allElementsForm = intoForm.querySelectorAll('fieldset');
  for (const elementForm of allElementsForm) {
    elementForm.removeAttribute('disabled', 'disabled');
  }
  intoMapFilter.classList.remove('map__filters--disabled');
  const allElementsOfFilterFieldset = intoMapFilter.querySelectorAll('fieldset');
  const allElementsOfFilterSelect = intoMapFilter.querySelectorAll('select');
  for (const elementOfFilter of allElementsOfFilterSelect) {
    elementOfFilter.removeAttribute('disabled', 'disabled');
  }
  for (const elementOfFilter of allElementsOfFilterFieldset) {
    elementOfFilter.removeAttribute('disabled', 'disabled');
  }
};

export {activateForm};
