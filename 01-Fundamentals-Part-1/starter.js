const age = 19;
const isOldEnough = age > 18;
if (isOldEnough) {
  console.log("I can start driving ");
} else {
  const yearLeft = 18 - age;
  console.log(`I can't drive. I've ${yearLeft} years left`);
}
