const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const types = [
  {
    type: 'bungalow',
    minCost: 0,
  },
  {
    type: 'flat',
    minCost: 1000,
  },
  {
    type: 'hotel',
    minCost: 3000,
  },
  {
    type: 'house',
    minCost: 5000,
  },
  {
    type: 'palace',
    minCost: 10000,
  },
];

const capacities = [
  {
    room: '100',
    guests: '0',
  },
  {
    room: '1',
    guests: '1',
  },
  {
    room: '2',
    guests: '1',
  },
  {
    room: '2',
    guests: '2',
  },
  {
    room: '3',
    guests: '1',
  },
  {
    room: '3',
    guests: '2',
  },
  {
    room: '3',
    guests: '3',
  },
];

export {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, types, capacities};
