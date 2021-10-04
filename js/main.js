const getRandomIntNumber = (fromStart, toFinish) => {
  if (fromStart >= 0) {
    if (toFinish >= 0) {
      if (fromStart <= toFinish) {
        return Math.floor (Math.random () * (toFinish - fromStart + 1)) + fromStart;
      }
      else {
        return null; //Ошибка! Параметр "от" больше параметра "до"
      }
    }
    else {
      return null; //Ошибка! Параметр "до" отрицательный
    }
  }
  else {
    return null; //Ошибка! Параметр "от" отрицательный
  }
};

getRandomIntNumber (2, 12);

const getRandomFloatInclusive = (fromStart, toFinish, signsAfter) => {
  if (fromStart >= 0) {
    if (toFinish >= 0) {
      if (fromStart <= toFinish) {
        if (signsAfter >=0) {
          const numFloat = Math.random() * (toFinish - fromStart + Math.pow(10, -1 * signsAfter)) + fromStart; //Максимум и минимум включаются
          return numFloat.toFixed(signsAfter);
        }
        else {
          return null; //Ошибка! Параметр "Кол-во знаков после запятой" отрицательный
        }
      }
      else {
        return null; //Ошибка! Параметр "от" больше параметра "до"
      }
    }
    else {
      return null; //Ошибка! Параметр "до" отрицательный
    }
  }
  else {
    return null; //Ошибка! Параметр "от" отрицательный
  }
};

getRandomFloatInclusive (0, 1, 5);

//Генерация случайных данных по заданию
const XX = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
const titlesOffers = ['Квартира со всем удобствами', 'Квартира с удобствами во дворе', 'Удачное приобретение', 'Мечта эммигранта'];
const typesRealty = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTimes = ['12:00', '13:00', '14:00'];
const featuresPoints = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosLinks = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const descriptionVariants = ['Квартира в самом центре города в 3 минутах ходьбы от метро', 'Бунгало с удобствами во дворе в 3 минутах ходьбы от метро', 'Мечта эммигранта для первого времени где-нибудь переночевать'];
const finishOffer = [];

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntNumber(0, elements.length - 1)];
};

const createAuthor = () => {
  const indexCut = getRandomArrayElement(XX);
  const copyXX = XX.slice();
  copyXX.splice(+indexCut - 1);
  return {
    avatar: 'img/avatars/user' + indexCut  + '.png'
  };
};
const author = createAuthor();
console.log(author);

const createLocationCoords = () => {
  const lat = getRandomFloatInclusive (35.65000, 35.70000, 5);
  const lng = getRandomFloatInclusive (139.70000, 139.80000, 5);
  return {
    lat,
    lng,
  };
};
const locationCoords = createLocationCoords();
console.log(locationCoords);

const createOffer = () => {
  const title = getRandomArrayElement (titlesOffers);
  const address = createLocationCoords ();
  const price = getRandomIntNumber (100, 200000);
  const type = getRandomArrayElement (typesRealty);
  const rooms = getRandomIntNumber (1, 10);
  const guests = getRandomIntNumber (1, 10);
  const checkin = getRandomArrayElement (checkinTimes);
  const checkout = getRandomArrayElement (checkinTimes);
  const description = getRandomArrayElement (descriptionVariants);
  const features = [];
  const photos = [];

  const copyFeaturesPoints = featuresPoints.slice();
  for (let i = 0; i <= getRandomIntNumber (0, 5); i++) {
    const indexCut = getRandomArrayElement(copyFeaturesPoints);
    features.push(indexCut);
    const cutIndex = copyFeaturesPoints.indexOf(indexCut);
    copyFeaturesPoints.splice(cutIndex);
  }

  for (let i = 0; i <= getRandomIntNumber (0, 2); i++) {
    photos.push(photosLinks[i]);
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
const offer = createOffer();
console.log(offer);


const createRealtyOffer = () => {
  return {
    author,
    offer,
    locationCoords,
  };
};


for (let i = 0; i <= 9; i++) {
const finish = createRealtyOffer();
finishOffer.push(finish);
};
console.log(finishOffer);
