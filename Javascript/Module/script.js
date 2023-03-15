import { fullName } from './super.js';

fullName('Amit', 'chaudhary')



//promise 


// const promise = new Promise(function (resolve, reject) {
//     const string1 = "geeksforgeeks";
//     const string2 = "geeksforgeeks";
//     if (string1 === string2) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise
//     .then(function () {
//         console.log("Promise resolved successfully");
//     })
//     .catch(function () {
//         console.log("Promise is rejected");
//     });






// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import addToCart, { cart } from './super.js';
addToCart('pizza', 2);
addToCart('bread', 5);
addToCart('apples', 4);

console.log(cart);
