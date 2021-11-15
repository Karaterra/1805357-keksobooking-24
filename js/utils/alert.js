import {isEscapeKey} from '../utils/user-modal.js';

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const confirmPopUp = (condition) => {
  const conditionElement = document.querySelector(`#${condition}`).content.querySelector(`.${condition}`);
  const containerBody = document.querySelector('body');
  const showElement = conditionElement.cloneNode(true);

  containerBody.append(showElement);

  const onPopupEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeUserModal();
    }
  };

  showElement.classList.remove('visually-hidden');

  document.addEventListener('keydown', onPopupEscKeydown);


  function closeUserModal () {
    showElement.classList.add('visually-hidden');

    document.removeEventListener('keydown', onPopupEscKeydown);
  }

  showElement.addEventListener('click', () => {
    closeUserModal();
  });

  return showElement;
};

export {showAlert, confirmPopUp};
