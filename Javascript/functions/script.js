// 'use strict';
//Default Parameters
// passing defalt parameters to the Function

// const schoolRecords = function (
//   name1 = 'Amit',
//   rollNo = 03,
//   classList = 'Div-A'
// ) {
//   //es5 way of adding default parameters
//   //   name1 = name1 || 1;
//   //   rollNo = rollNo || 02;
//   //   classList = 'Div-A';
//   //Es-6 way is simple just add the defeault value while passsing the parameters..(name1="Amit",rollNo=03,classList="Div-A")
//   console.log(name1, rollNo, classList);
// };

// schoolRecords('shubham');

///split the string
// const name = 'A,mit';
// console.log(name.split(', '));

//Function
// const upperName = function (p1) {
//   return p1.replace(/ /g, ' ').toUpperCase();
// };

// const word = upperName('aANJSAHDUSHJKDBJhaidsahkj');
// console.log(word);

//function returning  a function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
//if we want to call this function we have to use the following way
// greet('hii')('Amit');//This also works and we can use one other way also
// const greeting = greet('alas');
//we can use this variable as a function
// greeting('paaavan'); // here the variable is working as a function bcz the older function returned a function

//Function callBack

const airIndia = {
  flightName: 'DElhi to Mumbai',
  code: 'LH',
  book(name, flightCode) {
    console.log(
      `${name} has booked flight ${this.flightName} with ${this.code}${flightCode}` //in this code "this refers to the same object "
    );
  },
};
// airIndia.book('Amit', 23512); // here we can use the function in the object
//now suppose we have airIndia and it buy new airlines name airAsia

const airAsia = {
  flightName: 'Ahm to nyj',
  code: 'KK',
};
const bookNew = airIndia.book;
//now a passenger wants to book the ticket if we will use the old function call it will say "undifned " bcz of the "this "
//ex
// airAsia.book('pavan', 000);//This will not work

// to solve the above error we can use the function callback
//ex
//Call
// bookNew.call(airAsia, 'Pavan', 8888); //this will work

//apply
// const newflight = ['Umesh', '5555'];
// bookNew.apply(airIndia, newflight); //This eill not work bcz its take input as array.

//Bind

// const book = airIndia.book;
// const newBooknew = book.bind(airIndia);
// newBooknew('Pavan', 6666);

// example
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   fullName: function () {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
// };

// const member = {
//   firstName: 'Hege',
//   lastName: 'Nilsen',
// };

// let fullName = person.fullName.bind(member);
// fullName(member);
