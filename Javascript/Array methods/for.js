'use strict';
//example-1 in for of loop w cannot pass fucntion as a parameter but in forEach we can pass the function as a paramaeter
const fruit = ['mango', 'Banana', 'Apple', 'kiwi', 'orange'];
for (let i of fruit) {
  console.log(i);
}
//example-1
fruit.forEach(data => {
  console.log(data);
});

//example2 // we can get the index using the forEach and for of loop.
const nameNew = {
  firstName: ['a', 'm', 'i', 't'],
  lastName: 'Chaudhary',
  fullName: 'Amit Chaudhary',
};

for (let i of nameNew.firstName) {
  console.log(i);
}

nameNew.firstName.forEach((value, i) => {
  console.log(`${i}`);
});

// example3
