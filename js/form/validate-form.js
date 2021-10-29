const validateForm = () => {

  const MIN_TITLE_LENGTH = 30;
  const MAX_TITLE_LENGTH = 100;

  const offerTitle = document.getElementById('title');

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

  const offerType = document.getElementById('type');
  const offerCost = document.getElementById('price');

  const changeValueTypeToPrice = () => {

    offerCost.addEventListener('input', () => {
      const valueSelect = offerType.value;

      switch (valueSelect) {
        case 'bungalow':

          if (offerCost.value <= 0) {
            offerCost.setCustomValidity('Минимальная цена за ночь 0');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'flat':

          if (offerCost.value < 1000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 1000');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'hotel':

          if (offerCost.value < 3000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 3000');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'house':

          if (offerCost.value < 4000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 4000');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'palace':

          if (offerCost.value < 5000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 5000');
          } else {
            offerCost.setCustomValidity('');}
          break;
      }

      offerCost.reportValidity();
    });

    offerType.addEventListener('change', () => {
      const valueSelect = offerType.value;

      switch (valueSelect) {
        case 'bungalow':

          if (offerCost.value <= 0) {
            offerCost.setCustomValidity('Минимальная цена за ночь 0');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'flat':

          if (offerCost.value < 1000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 1000');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'hotel':

          if (offerCost.value < 3000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 3000');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'house':

          if (offerCost.value < 4000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 4000');
          } else {
            offerCost.setCustomValidity('');}
          break;
        case 'palace':

          if (offerCost.value < 5000) {
            offerCost.setCustomValidity('Минимальная цена за ночь 5000');
          } else {
            offerCost.setCustomValidity('');}
          break;
      }

      offerCost.reportValidity();
    });

  };

  changeValueTypeToPrice();

  const offerRoomNumber = document.getElementById('room_number');
  const guestQuantity = document.getElementById('capacity');

  const changeValueRoomsToGuests = () => {

    guestQuantity.addEventListener('change', () => {

      switch (guestQuantity.value) {
        case '1':

          if (offerRoomNumber.value === '1') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для 1 гостя`);

          }
          break;
        case '2':

          if (offerRoomNumber.value === '2') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для 2 гостей`);

          }

          break;
        case '3':

          if (offerRoomNumber.value === '3') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для 3 гостей`);

          }
          break;
        case '0':

          if (offerRoomNumber.value === '0') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для гостей`);

          }
          break;

      }

      guestQuantity.reportValidity();

    });

    offerRoomNumber.addEventListener('change', () => {

      switch (guestQuantity.value) {
        case '1':

          if (offerRoomNumber.value === '1') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для 1 гостя`);

          }
          break;
        case '2':

          if (offerRoomNumber.value === '2') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для 2 гостей`);

          }

          break;
        case '3':

          if (offerRoomNumber.value === '3') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для 3 гостей`);

          }
          break;
        case '0':

          if (offerRoomNumber.value === '0') {
            guestQuantity.setCustomValidity('');
          } else {
            guestQuantity.setCustomValidity(`${offerRoomNumber.value} комната(ы) не для гостей`);

          }
          break;

      }

      guestQuantity.reportValidity();

    });
  };

  changeValueRoomsToGuests();

  const adForm = document.querySelector('.ad-form');

  const timeIn = document.getElementById('timein');
  const timeOut = document.getElementById('timeout');

  adForm.addEventListener('submit', (evt) => {
    if (!offerTitle.validity.valid) {


      evt.preventDefault();
    } else if (!offerCost.validity.valid) {


      evt.preventDefault();
    } else if (!guestQuantity.validity.valid) {


      evt.preventDefault();
    } else if (!timeIn.validity.valid && !timeOut.validity.valid) {


      evt.preventDefault();
    } else {
      timeOut.setCustomValidity('');
      guestQuantity.setCustomValidity('');
      offerCost.setCustomValidity('');
      offerTitle.setCustomValidity('');

    }
    timeOut.reportValidity();
    guestQuantity.reportValidity();
    offerCost.reportValidity();
    offerTitle.reportValidity();
  });

};

export {validateForm};


