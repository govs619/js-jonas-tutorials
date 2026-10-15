'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]];
  },

  orderDelivered: function (obj) {},

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//prac
/*const num = [2, 3, 4];
const [a, b, c] = num;
console.log(a, b, c);

const { categories, name } = restaurant;
console.log(categories, name);*/

//Switching variables
/*let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[secondary, main] = [main, secondary];
console.log(main, secondary);

[main, secondary] = restaurant.order(2, 0);
console.log(main, secondary);*/

//NESTED DESTRUCTURING
/* const nested = [2, 4, [1, 3]];

const [n1, , [n2, n3]] = nested;

console.log(n1, n2, n3); */

//DEFAULT VALUES
/* const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); */

//EXAMPLE
/* const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours); */

//Different Names
/* const { openingHours: hours = {} } = restaurant.categories;
console.log(hours); */

//MUTATING VARIABLES
/* let a = 11;
let b = 12;
const obj = { a: 23, b: 7, c: 3 };

({ a, b } = obj); // {} at the start of a statement is considered as a code block, rather than object destructuring, to fix it wrap it inside ().
console.log(a, b);
 */

//NESTED OBJECTS
/* const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c); */

/* ------------SPEAD OPERATOR------------ */
/* const arr = [1, 2, 3];
const arrNew = [3, 4, 5, ...arr];
console.log(...arrNew);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = 'jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); */

/* REST OPERATOR */
// SPEAD, because on RIGHT side of =
/* const arr = [1, 2, ...[3, 4]];
const [a, b, ...others] = arr;
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
console.log(restaurant.openingHours);
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); */
