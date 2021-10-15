import {finishOffers} from '../data/get-mock-data.js';

const similarListElement = document.querySelector('#map-canvas');
const similarCardsTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarCards = finishOffers;

const similarListFragment = document.createDocumentFragment();

similarCards.forEach(({author, offer}) => {
  const cardElement = similarCardsTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').textContent = offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  let typeOffer = '';
  switch (offer.type) {
    case 'flat':
      typeOffer = 'Квартира';
      break;
    case 'bungalow':
      typeOffer = 'Бунгало';
      break;
    case 'house':
      typeOffer = 'Дом';
      break;
    case 'palace':
      typeOffer = 'Дворец';
      break;
    case 'hotel':
      typeOffer = 'Отель';
      break;
    default:
      typeOffer = 'Не указано';
  }

  cardElement.querySelector('.popup__type').textContent = typeOffer;
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;

  const cardFeatures = offer.features;

  const cardContainer = cardElement.querySelector('.popup__features');
  const cardListFragment = document.createDocumentFragment();

  cardFeatures.forEach((cardFeature) => {
    const cardListItem = cardContainer.querySelector(`.popup__feature--${cardFeature}`);

    if (cardListItem) {
      cardListFragment.append(cardListItem);
    }
  });

  cardContainer.innerHTML = '';
  cardContainer.append(cardListFragment);

  cardElement.querySelector('.popup__description').textContent = offer.description;

  const cardPhotos = offer.photos;

  const cardContainerPhotos = cardElement.querySelector('.popup__photos');
  const cardListFragmentPhotos = document.createDocumentFragment();

  cardPhotos.forEach((cardPhoto) => {
    const cardListItemPhoto = cardContainerPhotos.querySelector('.popup__photo');

    if (cardListItemPhoto) {
      cardListItemPhoto.src = cardPhoto;
      cardListFragmentPhotos.append(cardListItemPhoto);
    }
  });

  cardContainerPhotos.innerHTML = '';
  cardContainerPhotos.append(cardListFragmentPhotos);


  cardElement.querySelector('.popup__avatar').src = author.avatar;
  similarListFragment.appendChild(cardElement);
});

similarListElement.appendChild(similarListFragment);

export {similarListElement};
