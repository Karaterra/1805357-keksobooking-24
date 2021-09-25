const myResultInt = function getRandomIntNumber (from, to) {
  if (from >= 0 && to >= 0 && from !== to) {
    return Math.floor (Math.random () * (to - from + 1)) + from;
  }
};

// eslint-disable-next-line no-unused-vars
myResultInt (2, 12);

const myResultFloat = function getRandomIntInclusive(from, to, signsAfter) {
  if (from >= 0 && to >= 0 && signsAfter >=0 && from !== to) {
    from = Math.ceil(from);
    to = Math.floor(to);
    const numFloat = Math.random() * (to - from + 1) + from; //Максимум и минимум включаются
    return numFloat.toFixed(signsAfter);
  }
};

myResultFloat (22, 56, 5);
