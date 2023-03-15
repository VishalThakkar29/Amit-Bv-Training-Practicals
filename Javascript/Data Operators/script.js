'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name1: 'Classico Italiano',
//   location1: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['pizza', 'Pasta', 'Risotto'],
//   order: function (input1, input2) {
//     return [this.starterMenu[input1], this.starterMenu[input2]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

//Array Destructing
// const num = [1, 2, 3, 4, 5];

// const [x, y, z] = num;
// console.log(x, y, z);
// let [hii, say, kit] = restaurant.mainMenu;
// console.log(hii, say, kit);
//switching variables

// [hii, say] = [say, hii];
// console.log(say, hii);

// let [starter, mainFood] = restaurant.order(2, 3);
// console.log(starter, mainFood);

// nested destructring
// const rey = [1, 2, 3, [4, 5, 6]];
//now if i wanna acces this [4,5,6] i will use array destructing.

// const [one, , , [two, , three]] = rey; //this gaoing means dont destructe this part of the array
// console.log(one, two, three);

//object destructing

// const { name1, location1, categories } = restaurant;
// console.log(name1, location1, categories);

// let obj = {
//   abc1: 'hel0',
//   gf1: 'hjdfsk',
// };
// // let { abc, gf } = obj;

// //we can also give the vairbles new names

// const { abc1: def, gf1: fg } = obj;
// console.log(def, fg);

//Spread Operator

// const a = [1, 2, 3];

// const b = [4, 5, 6, ...a];
// console.log(b);

// Rest opreator

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//  const a=[1,2,3,4,5,6,7,8,9];
// const [a, b, ...hell] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(hell, a, b);

// pizza ingredients

// const pizzaIng = [
//   prompt('ingrident1'),
//   prompt('ingrident2'),
//   prompt('ingrident3'),
// ];
// console.log(pizzaIng);
// const [ing1, ing2, ing3] = pizzaIng;
// console.log(`this is the pizza made with ${ing1}, ${ing2}and ${ing3}`);

// shortcircuiting using and ,or opreators
//used for setting  default value
// using or operator

// console.log(undefined || 0);
// restaurant.noGuest = 23;
// const guest2 = restaurant.noGuest || ' no guest available';
// console.log(guest2);

//And operator will work exactly opposite to the 0r shortcircuiting .

//now suppose if we have restaurant.noGuest=0 so still our output will show the default value so to overcomewt this error we use nullish operator.

//nullish operator

// restaurant.noGuest = 0;

// const guest2 = restaurant.noGuest || 10; this is error or bug for us.
// const guest2 = restaurant.noGuest ?? 10; //now output is not our default value.
// console.log(guest2);
//Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// revision of the above topics
// using the above topics addition function
// const add1 = (a, b, ...kl) => {
//   const input1 = [
//     prompt('enter num 1'),
//     prompt('enter num 2'),
//     prompt('enter num 3'),
//   ];
//   const [x = 0, y = 0, z = 0] = input1;
//   const sum = Number(x) + Number(y) + Number(z);
//   console.log(sum);
// };
// add1(1, 2, 3, 4, 5);

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// stp1
// const players1 = [game.players[0]];
// console.log(players1);
// const players2 = [game.players[1]];
// console.log(players2);
// const [...players1] = game.players[0];
// console.log(players1);
// const [...players2] = game.players[1];
// console.log(players2);

// stp 2
//goalkeeper gk
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// const [gk1, ...fieldPlayers1] = players1;
// // console.log(gk1, fieldPlayers1);
// const [gk2, ...fieldPlayers2] = players2;
// // console.log(gk2, fieldPlayers2);
// // 3. Create an array 'allPlayers' containing all players of both teams (22
// // players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// // new array ('players1Final') containing all the original team1 players plus
// // 'Thiago', 'Coutinho' and 'Perisic'
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// console.log(players1Final);
// // 5. Based on the game.odds object, create one variable for each odd (called
// // 'team1', 'draw' and 'team2')
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);
// // 6. Write a function ('printGoals') that receives an arbitrary number of player
// // names (not an array) and prints each of them to the console, along with the
// // number of goals that were scored in total (number of player names passed in)
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// // 7. The team with the lower odd is more likely to win. Print to the console which
// // team is more likely to win, without using an if/else statement or the ternary
// // operator.
// team1 < team2 && console.log('team 1 wins');
// team1 > team2 && console.log('team 2 wins');

//to access all the items of restuaurnt menu and starter menu we need to access it in a const menu

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

//to access all the items of the menu item we need to make use of for loop
// for (const items of menu.entries()) console.log(items);
//without optinal chaaining
// console.log(restaurant.mainMenu.starter.hello); //This will throw an error bcz there is no such element in this

// so to check it whether is it or not we can use this optinal chaining
//with optinal chaining
// console.log(restaurant.mainMenu.starter?.hello); //now it will return undefined in the console.log

//Loop over objects property names
const restaurant = {
  name1: 'Classico Italiano',
  location1: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['pizza', 'Pasta', 'Risotto'],
  order: function (input1, input2) {
    return [this.starterMenu[input1], this.starterMenu[input2]];
  },
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
//to access the values of the object restaurant

// // for (const days of Object.keys(openingHours)) {
// //   console.log(openingHours);
// }
// for (const time of Object.values(restaurant.openingHours)) console.log(time);
//to access the keys of the object restaurant
// for (const day of Object.keys(restaurant.openingHours)) console.log(day);

// const properties = Object.keys(restaurant.openingHours);
// const days = Object.values(restaurant.openingHours);
// console.log(properties, days);

//Sets
const order = new Set(['pizza', 23, 'kmnu', 'dhokla', 'pizza']);
// console.log(new Set('Jonas'));
// console.log(order.size); //to check the size of the set
// console.log(order.has('pizza')); //This will check that if our set has the following
// order.add('garlic bread');
// console.log(order);
// order.delete('pasta');
// console.log(order);
// order.clear();
// for (const orderSet of order) console.log(typeof orderSet);
// for (const orderSet of order) console.log(orderSet); //this will

///MAp
// const rest = new Map();
// rest.set('1', 'Amit');
// rest.set('2', 'pavan');
// console.log(rest);

// Revision

// Array

const a = ['code', 'eat', 'read']; //used to storage simple data

//Sets
const task = new Set(['code', 'eat', 'repeat', 'code']); //GENERALLY USED FOR UNIQUE VALUES AND ALSO USED TO RMEOVE THE REPEATED VALUES FROM  OUR DATA

//OBJECT
const tasks = {
  name1: 'Amit',
  age: 25,
  lastName: 'Chaudhary',
  fathersName: 'Birendra',
};
//generally used when we need value and key pair
//Map
const taskNew = new Map([
  ['Name', 'Amit'],
  ['age', 25],
  ['lastName', 'Chaudhary'],
  ['fathersName', 'Birendra'],
  [false, 'Start the Work'],
]);
//here we can havae any type of key here...use Maps() when u need the keys which r not Strings
