const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const offerTitle = document.getElementById('title');

const offerType = document.getElementById('type');
const offerCost = document.getElementById('price');

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

const offerRoomNumber = document.getElementById('room_number');
const guestQuantity = document.getElementById('capacity');

export {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, offerTitle, offerType, offerCost, types, capacities, offerRoomNumber, guestQuantity};
