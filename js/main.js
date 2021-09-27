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

