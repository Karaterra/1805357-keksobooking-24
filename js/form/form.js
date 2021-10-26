const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const userTitleOffer = document.getElementById('title');

userTitleOffer.addEventListener('input', () => {
  const valueLength = userTitleOffer.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    userTitleOffer.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    userTitleOffer.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    userTitleOffer.setCustomValidity('');
  }

  userTitleOffer.reportValidity();
});

const changeValueTypeToPrice = () => {
  const userTypeOffer = document.getElementById('type');
  const userPriceOffer = document.getElementById('price');

  userPriceOffer.addEventListener('input', () => {
    const valueSelect = userTypeOffer.value;

    if (valueSelect === 'bungalow' && userPriceOffer.value < 1) {
      userPriceOffer.setCustomValidity('Минимальная цена за ночь 0');

    } else if (valueSelect === 'flat' && userPriceOffer.value < 1000) {
      userPriceOffer.setCustomValidity('Минимальная цена за ночь 1000');

    } else if (valueSelect === 'hotel' && userPriceOffer.value < 3000) {
      userPriceOffer.setCustomValidity('Минимальная цена за ночь 3000');

    } else if (valueSelect === 'house' && userPriceOffer.value < 5000) {
      userPriceOffer.setCustomValidity('Минимальная цена за ночь 5000');

    } else if (valueSelect === 'palace' && userPriceOffer.value < 10000) {
      userPriceOffer.setCustomValidity('Минимальная цена за ночь 10000');

    } else {
      userPriceOffer.setCustomValidity('');
    }

    return userPriceOffer.reportValidity(), userPriceOffer;
  });

  userTypeOffer.addEventListener('change', () => {
    const valueSelect = userTypeOffer.value;
    userPriceOffer.value = '';
    if (valueSelect === 'bungalow') {
      userPriceOffer.setAttribute('placeholder', 'от 0');
    } else if (valueSelect === 'flat') {
      userPriceOffer.setAttribute('placeholder', 'от 1000');
    } else if (valueSelect === 'hotel') {
      userPriceOffer.setAttribute('placeholder', 'от 3000');
    } else if (valueSelect === 'house') {
      userPriceOffer.setAttribute('placeholder', 'от 5000');
    } else if (valueSelect === 'palace') {
      userPriceOffer.setAttribute('placeholder', 'от 10000');
    } else {
      userPriceOffer.setAttribute('placeholder', 'от 5000');
    }
  });

};

const userRoomOffer = document.getElementById('room_number');
const userCapacity = document.getElementById('capacity');

const changeValueRoomsToGuests = () => {
  const valueOptions = userCapacity.querySelectorAll('option');

  userRoomOffer.addEventListener('change', () => {
    const valueSelect = userRoomOffer.value;

    for (const valueOption of valueOptions) {
      valueOption.setAttribute('disabled', true);
    }

    for (let counter = 0; counter < valueOptions.length; counter++) {
      if (valueSelect === '1' && valueOptions[counter].value === '1') {
        valueOptions[counter].removeAttribute('disabled');

      } else if (valueSelect === '2' && valueOptions[counter].value === '2') {
        valueOptions[counter].removeAttribute('disabled');
        valueOptions[counter + 1].removeAttribute('disabled');


      } else if (valueSelect === '3' && valueOptions[counter].value === '3') {
        valueOptions[counter].removeAttribute('disabled');
        valueOptions[counter + 1].removeAttribute('disabled');
        valueOptions[counter + 2].removeAttribute('disabled');


      } else if (valueSelect === '100' && valueOptions[counter].value === '0') {
        valueOptions[counter].removeAttribute('disabled');

      }
    }
  });
};

const userForm = document.querySelector('.ad-form');

const userTimeIn = document.getElementById('timein');
const userTimeOut = document.getElementById('timeout');
const userPrice = document.getElementById('price');

userForm.addEventListener('submit', (evt) => {
  if (!userTitleOffer.validity.valid) {
    evt.preventDefault();
  } else if (!userPrice.validity.valid) {
    evt.preventDefault();
  } else if (!userCapacity.validity.valid) {
    evt.preventDefault();
  } else if (!userTimeIn.validity.valid && !userTimeOut.validity.valid) {
    evt.preventDefault();
  }

});

export {userTitleOffer, changeValueTypeToPrice, changeValueRoomsToGuests};


