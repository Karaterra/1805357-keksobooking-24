import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, types, capacities} from '../data/variables.js';

const validateForm = () => {

  const onOfferTitle = document.getElementById('title');

  const onOfferType = document.getElementById('type');
  const onOfferCost = document.getElementById('price');

  const onOfferRoomNumber = document.getElementById('room_number');
  const onGuestQuantity = document.getElementById('capacity');

  onOfferTitle.addEventListener('input', () => {
    const valueLength = onOfferTitle.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      onOfferTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      onOfferTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
    } else {
      onOfferTitle.setCustomValidity('');
    }

    onOfferTitle.reportValidity();
  });


  const changeDependedValues = () => {
    for (const item of types) {
      if (onOfferCost.value < item.minCost && item.type === onOfferType.value) {
        onOfferCost.setCustomValidity(`Минимальная цена за ночь ${item.minCost}`);
        onOfferCost.setAttribute('placeholder', `от ${item.minCost}`);
        break;
      } else if (item.type === onOfferType.value) {
        onOfferCost.setAttribute('placeholder', `от ${item.minCost}`);
        onOfferCost.setCustomValidity('');
      }
    }
  };

  const changeDependedFields = () => {
    for (const item of capacities) {
      if ((onOfferRoomNumber.value === item.room && onGuestQuantity.value === item.guests) || (onGuestQuantity.value === 0 && onOfferRoomNumber.value === 100)) {
        onGuestQuantity.setCustomValidity('');
        onOfferRoomNumber.setCustomValidity('');
        break;
      } else if (onGuestQuantity.value === item.guests) {
        onGuestQuantity.setCustomValidity(`${onOfferRoomNumber.value} комната(ы) не для ${item.guests} гостя(ей)`);
      }
    }
  };

  // onOfferType.addEventListener('input', () => {
  //   changeDependedValues();
  //   onOfferCost.reportValidity();
  // });


  // onOfferType.addEventListener('change', () => {
  //   changeDependedValues();
  //   onOfferType.reportValidity();
  // });

  const eventsValidity = [onOfferType, onOfferCost, onGuestQuantity, onOfferRoomNumber];
  const eventsList = ['input', 'change'];

  eventsValidity.forEach((eventValidity) => {
    for (let i = 0; i < eventsList.length; i++) {
      eventValidity.addEventListener(eventsList[i], () => {
        changeDependedValues();
        changeDependedFields();
        eventValidity.reportValidity();
      });
    }
  });


  // onGuestQuantity.addEventListener('change', () => {
  //   changeDependedFields();
  //   onGuestQuantity.reportValidity();
  // });

  // onOfferRoomNumber.addEventListener('change', () => {
  //   changeDependedFields();
  //   onOfferRoomNumber.reportValidity();
  // });

};

export {validateForm};


