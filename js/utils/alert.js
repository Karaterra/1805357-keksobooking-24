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

const showSuccess = (condition) => {
  const conditionElement = document.querySelector(`#${condition}`).content.querySelector(`.${condition}`);
  const whereAppendElement = document.querySelector('body');
  const showElement = conditionElement.cloneNode(true);
  if (condition) {
    showElement.classList.remove('visually-hidden');
  } else {
    showElement.classList.add('visually-hidden');
  }
  whereAppendElement.append(showElement);

  document.addEventListener('click', () => {
    showElement.classList.add('visually-hidden');
  });
  return showElement;
};

export {showAlert, showSuccess};
