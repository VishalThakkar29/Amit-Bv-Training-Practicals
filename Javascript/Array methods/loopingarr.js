'use strict';
//use of for loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

//to get the values of the array using for loop
// for (const mov of movements) {
//   if (mov > 0) {
//     console.log(`u deposited ${mov}`);
//   } else {
//     console.log(`u credited ${Math.abs(mov)}`);
//   }
// }
//we can get the same thing using simple way that is using the forEach loop
//forEach loop
// movements.forEach(function (mov) {
//   if (mov > 0) {
//     console.log(`u deposited ${mov}`);
//   } else {
//     console.log(`u credited ${Math.abs(mov)}`);
//   }
// });
//forEach having the different values and index and the whole aaray
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Index ${i + 1}:u deposited ${mov}`);
//   } else {
//     console.log(`Index ${i + 1}:u credited ${Math.abs(mov)}`);
//   }
// });

//here this will take all the elements one by one and then apply the function value on each elements

//FOR EACH ON MAPS AND SETS
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });

// const uniq = new Set(['usd', 'eur', 'gpb', 'eur', 'usd']);

// //here also we can use forEach to get the values
// uniq.forEach(function (value, _, Set) {
//   //here we have usnderScore to understand that here the key is useless value
//   console.log(`${_}:${value}`);
// });

// const data = '   harsha prajapati   ';
// let [firstName, ...lastName] = data.trim().split(' ');
// const data4 = firstName.toUpperCase();
// console.log(data4);
