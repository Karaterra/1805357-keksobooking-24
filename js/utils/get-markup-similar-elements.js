import {createSimilarOffers} from '../data/get-mock-data.js';

const MAX_OFFERS_QUANTITY = 1;

const typesOffer = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarCards = createSimilarOffers(MAX_OFFERS_QUANTITY);

const similarListElement = document.querySelector('#map-canvas');
const similarCardsTemplate = document.querySelector('#card').content.querySelector('.popup');

const similarListFragment = document.createDocumentFragment();

const getMarkupSimilarElement = ({offer, author}) => {
  const cardElement = similarCardsTemplate.cloneNode(true);

  !offer.title ? cardElement.querySelector('.popup__title').classList.add('visually-hidden') : cardElement.querySelector('.popup__title').textContent = offer.title;
  !offer.address ? cardElement.querySelector('.popup__text--address').classList.add('visually-hidden') : cardElement.querySelector('.popup__text--address').textContent = offer.address;
  !offer.price ? cardElement.querySelector('.popup__text--price').classList.add('visually-hidden') : cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

  !offer.type ? cardElement.querySelector('.popup__type').classList.add('visually-hidden') : cardElement.querySelector('.popup__type').textContent = typesOffer[offer.type];
  !offer.rooms || !offer.guests ? cardElement.querySelector('.popup__text--capacity').classList.add('visually-hidden') : cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  !offer.checkin || !offer.checkout ? cardElement.querySelector('.popup__text--time').classList.add('visually-hidden') : cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;

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

  !offer.description ? cardElement.querySelector('.popup__description').classList.add('visually-hidden') : cardElement.querySelector('.popup__description').textContent = offer.description;

  const cardPhotos = offer.photos.slice();

  const cardContainerPhotos = cardElement.querySelector('.popup__photos');

  const cardListFragmentPhotos = document.createDocumentFragment();

  const cardListItemPhoto = cardContainerPhotos.querySelector('.popup__photo');

  for (let counter = 0; counter < cardPhotos.length; counter++) {
    const currentOffer = cardListItemPhoto.cloneNode(true);
    currentOffer.src = cardPhotos[counter];
    cardListFragmentPhotos.append(currentOffer);
  }

  cardContainerPhotos.innerHTML = '';
  cardContainerPhotos.append(cardListFragmentPhotos);

  !author.avatar ? cardElement.querySelector('.popup__avatar').classList.add('visually-hidden') : cardElement.querySelector('.popup__avatar').src = author.avatar;
  similarListFragment.appendChild(cardElement);
  similarListElement.appendChild(similarListFragment);

  return similarListElement;

};
const similarCardsArray = [];
similarCards.forEach((similarCard) => {
  const outputCard = getMarkupSimilarElement(similarCard);
  similarCardsArray.push(outputCard);
});

export {getMarkupSimilarElement, similarCardsArray};


