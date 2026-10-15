// console.log(calcAge1(1990));

// function calcAge1(birthYear) {
//   return 2026 - birthYear;
// }

// const calcAge2 = function (birthYear) {
//   return 2026 - birthYear;
// };

// console.log(calcAge1(1990));

// const calcAge3 = (birthYear) => 2026 - birthYear;
// console.log(calcAge3(1990));

// const getUser = () => {
//   return { name: "Rahul" };
// };
// console.log(getUser());

// const user = { name: "Rahul", address: { city: "New Delhi" } };

// const {
//   address: { city },
// } = user;
// console.log(city);

// const user = { name: "Neha" };

// const { name: userName } = user;
// console.log(userName);
// const [first, , third] = [1, 2, 3, 4];
// console.log(first, third);

/* Write your code below. Good luck! 🙂 */
const calcBMI = function () {
  this.bmi = this.mass / (this.height * this.height);
};

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI,
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI,
};

mark.calcBMI();
john.calcBMI();

console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})!`
    : `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})!`,
);
