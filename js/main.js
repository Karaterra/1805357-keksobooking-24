//Генерация случайных данных по заданию
const picturesNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const titlesOffers = ['Квартира со всем удобствами', 'Квартира с удобствами во дворе', 'Удачное приобретение', 'Мечта эммигранта'];
const typesRealty = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTimes = ['12:00', '13:00', '14:00'];
const featuresPoints = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosLinks = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const descriptionVariants = ['Квартира в самом центре города в 3 минутах ходьбы от метро', 'Бунгало с удобствами во дворе в 3 минутах ходьбы от метро', 'Мечта эммигранта для первого времени где-нибудь переночевать'];
const finishOffers = [];
const COUNTER_LIMIT = 9;

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


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];


// const getRandomArrayElementNoRepeat = (elements) => {
//   const previousValues = [];
//   const copyElements = elements.slice();

//   let indexCut = copyElements[getRandomPositiveInteger(0, copyElements.length - 1)];

//   if (previousValues.length >= (copyElements.length)) {
//     return null;
//   }
//   while (previousValues.includes(indexCut)) {
//     indexCut = copyElements[getRandomPositiveInteger(0, copyElements.length - 1)];
//   }
//   previousValues.push(indexCut);
//   return indexCut;
// };

const copyPicturesNumbers = picturesNumbers.slice();
const createAuthor = (counter) => {
  for (let counter1 = 0; counter1 <= COUNTER_LIMIT; counter1++) {
    return {
      avatar: `img/avatars/user${copyPicturesNumbers[counter]}.png`,
    };
  }
};

const createLocationCoords = () => {
  const lat = getRandomPositiveFloat (35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat (139.70000, 139.80000, 5);
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

const createRealtyOffer = (counter) => {
  const author = createAuthor(counter);
  const locationCoords = createLocationCoords();
  const offer = createOffer(locationCoords);

  return {
    author,
    offer,
    locationCoords,
  };
};


for (let counter = 0; counter <= COUNTER_LIMIT; counter++) {
  const finalizedOffer = createRealtyOffer(counter);
  finishOffers.push(finalizedOffer);
}
