import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, offerTitle, offerType, offerCost, types, capacities, offerRoomNumber, guestQuantity} from '../data/variables.js';
const validateForm = () => {

  offerTitle.addEventListener('input', () => {
    const valueLength = offerTitle.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      offerTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      offerTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
    } else {
      offerTitle.setCustomValidity('');
    }

    offerTitle.reportValidity();
  });


  const changeDependedValues = () => {
    for (const item of types) {
      if (offerCost.value < item.minCost && item.type === offerType.value) {
        offerCost.setCustomValidity(`Минимальная цена за ночь ${item.minCost}`);
        offerCost.setAttribute('placeholder', `от ${item.minCost}`);
        break;
      } else if (item.type === offerType.value) {
        offerCost.setAttribute('placeholder', `от ${item.minCost}`);
        offerCost.setCustomValidity('');
      }
    }
  };

  offerCost.addEventListener('input', () => {
    changeDependedValues();
    offerCost.reportValidity();
  });


  offerType.addEventListener('change', () => {
    changeDependedValues();
    offerCost.reportValidity();
  });

  const changeDependedFields = () => {
    for (const item of capacities) {
      if ((offerRoomNumber.value === item.room && guestQuantity.value === item.guests) || (guestQuantity.value === 0 && offerRoomNumber.value === 100)) {
        guestQuantity.setCustomValidity('');
        offerRoomNumber.setCustomValidity('');
        break;
      } else if (guestQuantity.value === item.guests) {
        guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для ${item.guests} гостя(ей)`);
      }
    }
  };


  guestQuantity.addEventListener('change', () => {
    changeDependedFields();
    guestQuantity.reportValidity();
  });

  offerRoomNumber.addEventListener('change', () => {
    changeDependedFields();
    offerRoomNumber.reportValidity();
  });

};

export {validateForm};


