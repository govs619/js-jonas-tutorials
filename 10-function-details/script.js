'use strict';

// HIGHER-ORDER FUNCTION EXAMPLE
/* function greet(name) {
  return `Hello, ${name}!`;
}

function processUser(callback) {
  console.log(callback('Govind'));
}

processUser(greet); */

// FUNCTION TRANSFORMER EXAMPLE
/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...rest] = str.split(' ');
  return [first.toUpperCase(), ...rest].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Transformed by ${fn.name}`);
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};
const sentance = `Javascript is the best!`;
transformer(sentance, upperFirstWord);
transformer(sentance, oneWord);

const high5 = function () {
  console.log('👍');
};

document.body.addEventListener('click', high5); */

// FUNCTION RETURNING FUNCTION EXAMPLE
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}; */

// greeterHey('Govind');

// CORRESPONDING ARROW EXAMPLE
/* const greet = greeting => name => console.log(`${greeting}, ${name}!`);

const greeterHey = greet('Hey')('Govind'); */

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Govind Sharma');
