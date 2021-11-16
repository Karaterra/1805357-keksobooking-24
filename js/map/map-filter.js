const filterPanel = document.querySelector('.map__filters');
// const filterFieldset = filterPanel.querySelector('map__features');
const allSelects = filterPanel.querySelectorAll('select');

const getValueSelect = () => {
  const filterSelects = [];
  allSelects.forEach((allSelect) => {
    const filterSelect = allSelect.value;
    filterSelects.push(filterSelect);
    // console.log(allSelect.value, filterSelects, allSelects);
    return filterSelects;
  });
};

const mapFilter = ((dataForFilter, filterSelects) => {

  getValueSelect();

  filterPanel.addEventListener('change', () => {
    getValueSelect();
    filterSelects.forEach((filterSelect) => {
      const arrayDatasFilter = dataForFilter.filter((dataForFilterElement) => {
        if (dataForFilterElement.offer.type === filterSelect.value) {
          arrayDatasFilter.push(dataForFilterElement);
        } else if (dataForFilterElement.offer.price === filterSelect.value) {
          arrayDatasFilter.push(dataForFilterElement);
        } else if (dataForFilterElement.offer.rooms === filterSelect.value) {
          arrayDatasFilter.push(dataForFilterElement);
        } else if (dataForFilterElement.offer.guests === filterSelect.value) {
          arrayDatasFilter.push(dataForFilterElement);
        }
        console.log(filterSelect.value, dataForFilterElement.offer.type);
        return arrayDatasFilter;

      });
    });
  });


});

export {mapFilter};
