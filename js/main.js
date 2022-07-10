// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

function getRandomPositiveIntegerWithPadding(a, b,) {
  const value = getRandomPositiveInteger(a, b)
  if (value < 10) {
    return `0${value}`
  }
  return value
}
const checkouts = ['12:00', '13:00', '14:00']
const checkins = ['12:00', '13:00', '14:00']
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel']
const featur = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner']
const latitude = getRandomPositiveFloat(35.65000, 35.70000, 5);
const longitude = getRandomPositiveFloat(139.70000, 139.80000, 5);
function getOffers(count = 10) {
  const offers = [];
  for (let i = 0; i < count; i++) {
    const offer = {
      author: {
        avatar: `img/avatars/user${getRandomPositiveIntegerWithPadding(1, 10)}.png`
      },
      offer: {
        title: 'Придумайте самостоятельно.',
        address: `${getRandomPositiveFloat(0, 10, 2)}, ${getRandomPositiveFloat(0, 10, 2)}`,
        price: getRandomPositiveInteger(0, 1000),
        type: types[getRandomPositiveInteger(0, types.length - 1)],
        rooms: getRandomPositiveInteger(0, 10),
        guests: getRandomPositiveInteger(0, 10),
        checkin: checkins[getRandomPositiveInteger(0, checkins.length - 1)],
        checkout: checkouts[getRandomPositiveInteger(0, checkouts.length - 1)],
        features: featur[getRandomPositiveInteger(0, featur.length - 1)],
        description: 'описание помещения',
      },
      location: {
        lat: latitude,
        lng: longitude,
      }
    }
    offers.push(offer)
  }
  return offers
}
console.log(getOffers());
