const typesOffer = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarCardsTemplate = document.querySelector('#card').content.querySelector('.popup');

const getSimilarOfferElement = ({offer, author}) => {
  const cardElement = similarCardsTemplate.cloneNode(true);
  const cardContainer = cardElement.querySelector('.popup__features');
  const cardTitle = cardElement.querySelector('.popup__title');
  const cardAddress = cardElement.querySelector('.popup__text--address');
  const cardPrice = cardElement.querySelector('.popup__text--price');
  const cardType = cardElement.querySelector('.popup__type');
  const cardCapacity = cardElement.querySelector('.popup__text--capacity');
  const cardTime = cardElement.querySelector('.popup__text--time');
  const cardDescription = cardElement.querySelector('.popup__description');
  const cardAvatar = cardElement.querySelector('.popup__avatar');
  const cardContainerPhotos = cardElement.querySelector('.popup__photos');
  const cardListItemPhoto = cardContainerPhotos.querySelector('.popup__photo');

  !offer.title ? cardTitle.classList.add('visually-hidden') : cardTitle.textContent = offer.title;
  !offer.address ? cardAddress.classList.add('visually-hidden') : cardAddress.textContent = offer.address;
  !offer.price ? cardPrice.classList.add('visually-hidden') : cardPrice.textContent = `${offer.price} ₽/ночь`;

  !offer.type ? cardType.classList.add('visually-hidden') : cardType.textContent = typesOffer[offer.type];
  !offer.rooms || !offer.guests ? cardCapacity.classList.add('visually-hidden') : cardCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  !offer.checkin || !offer.checkout ? cardTime.classList.add('visually-hidden') : cardTime.textContent = `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;
  !offer.description ? cardDescription.classList.add('visually-hidden') : cardDescription.textContent = offer.description;
  !author.avatar ? cardAvatar.classList.add('visually-hidden') : cardAvatar.src = author.avatar;

  if (offer.features && offer.features.length) {
    const cardFeatures = offer.features;
    const cardListFragment = document.createDocumentFragment();

    cardFeatures.forEach((cardFeature) => {
      const cardListItem = cardContainer.querySelector(`.popup__feature--${cardFeature}`);
      if (cardListItem) {
        cardListFragment.append(cardListItem);
      }
    });

    cardContainer.innerHTML = '';
    cardContainer.append(cardListFragment);
  } else {
    cardContainer.classList.add('visually-hidden');
  }

  if (offer.photos && offer.photos.length) {
    const cardPhotos = offer.photos.slice();
    const cardListFragmentPhotos = document.createDocumentFragment();


    cardPhotos.forEach((cardPhoto) => {
      const currentOffer = cardListItemPhoto.cloneNode(true);
      currentOffer.src = cardPhoto;
      cardListFragmentPhotos.append(currentOffer);
    });

    cardContainerPhotos.innerHTML = '';
    cardContainerPhotos.append(cardListFragmentPhotos);
  } else {
    cardContainerPhotos.classList.add('visually-hidden');
  }

  return cardElement;

};

export {getSimilarOfferElement};
