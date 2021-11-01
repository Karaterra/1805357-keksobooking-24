const setNonActiveMode = (adForm, filterPanel, formFieldsets, filterFieldsets, filterSelects) => {

  adForm.classList.add('ad-form--disabled');
  for (const formFieldset of formFieldsets) {
    formFieldset.setAttribute('disabled', true);
  }
  filterPanel.classList.add('map__filters--disabled');
  for (const filterSelect of filterSelects) {
    filterSelect.setAttribute('disabled', true);
  }
  for (const filterFieldset of filterFieldsets) {
    filterFieldset.setAttribute('disabled', true);
  }
};

export {setNonActiveMode};
