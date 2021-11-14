import {showSuccess} from '../utils/alert.js';
import {resetMap} from '../map/map-script.js';

const getData = (onSuccess) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => response.json())
    .then((dataCards) => {
      onSuccess(dataCards);
    });

};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
      contentType: 'multipart/form-data',
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        showSuccess('success');
        resetMap();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
        showSuccess('error');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
      showSuccess('error');
    });
};

export {getData, sendData};
