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
const author = {
  avatar: 'img/avatars/user.png',
};

const offer = {
  title: 'Квартира со всем удобствами',
  address: 'location.lat, location.lng',
  price: 1000,
  type: 'house',
  rooms: 1,
  guests: 0,
  checkin: '12:00',
  checkout: '13:00',
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  description: 'Квартира в самом центре города в 3 минутах ходьбы от метро',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

const location = {
  lat: 35.65000,
  lng: 139.70000,
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntNumber(0, elements.length - 1)];
};

const createAuthor = () => {
  let indexCut = getRandomArrayElement(XX);
  XX.splice(+indexCut - 1);
  return {
    avatar: 'img/avatars/user' + indexCut  + '.png'
  };
};

const varsin = createAuthor();
