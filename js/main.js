let digits = 0;

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


//Генерация случайных данных по заданию
const picturesNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const titlesOffers = ['Квартира со всем удобствами', 'Квартира с удобствами во дворе', 'Удачное приобретение', 'Мечта эммигранта'];
const typesRealty = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTimes = ['12:00', '13:00', '14:00'];
const featuresPoints = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosLinks = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const descriptionVariants = ['Квартира в самом центре города в 3 минутах ходьбы от метро', 'Бунгало с удобствами во дворе в 3 минутах ходьбы от метро', 'Мечта эммигранта для первого времени где-нибудь переночевать'];
const finishOffer = [];
const counterLimit = 9;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


const getRandomArrayElementNoRepeat = (elements) => {
  const previousValues = [];
  const copyElements = elements.slice();

  return function () {
    let indexCut = copyElements[getRandomPositiveInteger(0, copyElements.length - 1)];

    if (previousValues.length >= (copyElements.length)) {
      return null;
    }
    while (previousValues.includes(indexCut)) {
      indexCut = copyElements[getRandomPositiveInteger(0, copyElements.length - 1)];
    }
    previousValues.push(indexCut);
    return indexCut;
  };
};

const copyPicturesNumbers = picturesNumbers.slice();

const createAuthor = () => {
  const indexPaste = getRandomArrayElementNoRepeat(copyPicturesNumbers);
  return {
    avatar: `img/avatars/user${  indexPaste   }.png`,
  };
};

const createLocationCoords = () => {
  const lat = getRandomPositiveFloat (35.65000, 35.70000, digits = 5);
  const lng = getRandomPositiveFloat (139.70000, 139.80000, digits = 5);
  return {
    lat,
    lng,
  };
};

const createOffer = (locationCoords) => {
  const title = getRandomArrayElement (titlesOffers);
  const address = `${locationCoords.lat  }, ${  locationCoords.lng}`;
  const price = getRandomPositiveInteger (100, 200000);
  const type = getRandomArrayElement (typesRealty);
  const rooms = getRandomPositiveInteger (1, 10);
  const guests = getRandomPositiveInteger (1, 10);
  const checkin = getRandomArrayElement (checkinTimes);
  const checkout = getRandomArrayElement (checkinTimes);
  const description = getRandomArrayElement (descriptionVariants);
  const features = [];
  const photos = [];

  const copyFeaturesPoints = featuresPoints.slice();
  for (let counter = 0; counter <= getRandomPositiveInteger (0, 5); counter++) {
    const indexElementCut = getRandomArrayElement(copyFeaturesPoints);
    features.push(indexElementCut);
    const copyIndexElementCut = copyFeaturesPoints.indexOf(indexElementCut);
    copyFeaturesPoints.splice(copyIndexElementCut, 1);
  }

  for (let counter = 0; counter <= getRandomPositiveInteger (0, 2); counter++) {
    photos.push(photosLinks[counter]);
  }

  return {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  };
};

const createRealtyOffer = () => {
  const author = createAuthor();
  const offer = createOffer(locationCoords);
  const locationCoords = createLocationCoords();

  return {
    author,
    offer,
    locationCoords,
  };
};


for (let counter = 0; counter <= counterLimit; counter++) {
  const finalizedOffer = createRealtyOffer();
  finishOffer.push(finalizedOffer);
}
