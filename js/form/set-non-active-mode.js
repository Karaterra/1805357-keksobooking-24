const setNonActiveMode = (adForm, filterPanel) => {

  adForm.classList.add('ad-form--disabled');
  const formFieldsets = adForm.querySelectorAll('fieldset');
  for (const formFieldset of formFieldsets) {
    formFieldset.setAttribute('disabled', true);
  }
  filterPanel.classList.add('map__filters--disabled');
  const filterFieldsets = filterPanel.querySelectorAll('fieldset');
  const filterSelects = filterPanel.querySelectorAll('select');
  for (const filterSelect of filterSelects) {
    filterSelect.setAttribute('disabled', true);
  }
  for (const filterFieldset of filterFieldsets) {
    filterFieldset.setAttribute('disabled', true);
  }
};

export {setNonActiveMode};
