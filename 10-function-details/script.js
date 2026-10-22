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

/* const lufthansa = {
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

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

lufthansa.book(239, 'Govind Sharma');
lufthansa.book(635, 'John Smith');

const book = lufthansa.book; */

// DOES NOT WORK
// book(32, 'sham');

/* book.call(lufthansa, 23, 'Sham');
book.call(eurowings, 12, 'Aman');
book.apply(lufthansa, [11, 'Ankit']);
console.log(eurowings.bookings);
 */
// BIND EXAMPLE
/* lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(lufthansa.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
 */

/* const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addGST = addTax.bind(null, 0.18);
console.log(addGST(100));

const taxIndia = function (rate) {
  return function (value) {
    return value + rate * value;
  };
};

console.log(taxIndia(0.18)(100)); */

const poll = {
  question: 'What is your favourite progamming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  //This generates [0,0,0,0].
  answers: new Array(4).fill(0),
};
