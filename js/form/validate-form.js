import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, types, capacities} from '../data/variables.js';
import {resetMap} from '../map/map-script.js';
import {sendData} from '../api/api.js';

const offerCost = document.getElementById('price');

const validateForm = () => {
  const offerTitle = document.getElementById('title');
  const offerType = document.getElementById('type');
  const offerRoomNumber = document.getElementById('room_number');
  const guestQuantity = document.getElementById('capacity');

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

  const onOfferTypeAndCostChange = () => {
    changeDependedValues();
    offerCost.reportValidity();
  };

  offerType.addEventListener('change', onOfferTypeAndCostChange);
  offerCost.addEventListener('input', onOfferTypeAndCostChange);


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

  const onOfferGuestsAndRooms = () => {
    changeDependedFields();
    guestQuantity.reportValidity();
  };

  guestQuantity.addEventListener('change', onOfferGuestsAndRooms);
  offerRoomNumber.addEventListener('change', onOfferGuestsAndRooms);
};


const setUserFormSubmit = (confirmPopUp) => {
  const adForm = document.querySelector('.ad-form');
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => {
        confirmPopUp('success');
        adForm.reset();
        resetMap();
      },
      () => confirmPopUp('error'),
      new FormData(adForm),
    );
  });

  adForm.addEventListener('reset', () => {
    offerCost.setAttribute('placeholder', 'от 1000');
    resetMap();
  });

};

export {validateForm, setUserFormSubmit};
