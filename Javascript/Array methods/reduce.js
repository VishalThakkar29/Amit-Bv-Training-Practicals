//Reduce is used to collect all the data from the array and store it to a element in an array.
const newdata24 = [1, 2, 6, -6, -5, -8, 0, 7];

const datatest = newdata24.reduce(function (acc, val) {
  return acc + val;
}, 0);
console.log(datatest);
