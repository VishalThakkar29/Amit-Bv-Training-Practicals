// let js = "javascript";
// if (js === "javascript") alert("Js is fun");
// let $kid="richie";
// let PI=3.14;
// console.log($kid , PI);

// let js= "This is the Welcome message";
// let namee="Ritik";
// namee = true;
// let kk=null;
// console.log(typeof js);
// console.log(typeof namee);
// console.log(typeof kk);

//Dynamic typing (Assaining value to a variable)

// for example we have namee variable we can aaasign it a new value

//Difference between let , var and const

//Operators

//Concatinate two strings
//  const firstName="Amit";
//  const lastName="Chaudhary"
//  const fullName= firstName + " " + lastName;
//  console.log(fullName);

//challenge 1

//  const markMass=78;
// const johnMass=92;
// const markHeight=1.69;
// const johnHeight=1.95;

// const johnBmi= johnMass/(johnHeight*2);
// const markBmi=markMass/(markHeight*2);
//   const markHigherBmi= johnBmi>markBmi;

// console.log(johnBmi ,markBmi ,markHigherBmi);

//Strings Literals and Templates
//  const firstName="Robert";
//  const lastName="Clive";
//  const age="28";
//   //to concanitate
//    const fullInfo=`i'm ${firstName} ${lastName} from England and
//    i m ${age} years old`;
//    console.log(fullInfo);

//if else
// const age=15;
// if(age>=18){
//     console.log("Can Drive");
// }
// else{
//     console.log("Cannot Drive");
// }

//challenge2

//  const markMass=78;
// const johnMass=92;
// const markHeight=1.69;
// const johnHeight=1.95;

// const johnBmi= johnMass/(johnHeight*2);
// const markBmi=markMass/(markHeight*2);
//   const markHigherBmi= johnBmi>markBmi;

// if(markHigherBmi){
//     console.log(`John's Bmi (${johnBmi}) is higher than Mark's Bmi(${markBmi})`);
// }
// else{
//     console.log(`Mark's Bmi(${markBmi} is higher than John's Bmi (${johnBmi})  `);

// }
//Type conversion

//   let years="23"
//   console.log( years  + 10);
//output is 2310
// the above code will print (my age is 2310)
// so to solve this we can add type conversion here

//   console.log(Number(years) + 10);
//output is 33

//type coercion

//   let years=10;
//   console.log(years*2);
//   console.log(years/2);
//   console.log

//Equality operators
//===
// let age=20;
// if (age===20){
//     console.log("Ur perfect age");
// }
// else{
//     console.log("Ur not  perfect  age");
// }
//Ur perfect age
//example2
// let age="20";
// if (age===20){
//     console.log("Ur perfect age");
// }
// else{
//     console.log("Ur not  perfect  age");
// }
//u  r not perfect age
//==
// let age=20;
// if (age=="20"){
//     console.log("Ur perfect age");
// }
// else{
//     console.log("Ur not  perfect  age");
// }
// let x=16 -"hello";
// console.log(x);
// let x=99;
// ++x;
// console.log(x);
//  let x= null + "Amit";
// console.log(x);

// Coding Challenge 3
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// start
// let dolphinScore1=96;
// let dolphinScore2=108;
// let dolphinScore3=89;

// let koalasScore1=88;
// let koalasScore2=91;
// let koalasScore3=110;

// const dolphinAvgScore=(dolphinScore1+dolphinScore2+dolphinScore3)/3;
// const koalasAvgScore=(koalasScore1+koalasScore2+koalasScore3)/3;

//  if(dolphinAvgScore===koalasAvgScore){
//     console.log("Both are Winners");
//  }
//  else if(dolphinAvgScore>koalasAvgScore){
//     console.log("Dolphins are  the winners");
//  }
//  else if(dolphinAvgScore<koalasAvgScore){
//     console.log("Koalas are the Winners");
//  }

//Switch Case

//  const day = prompt("enter between 1 to 7 for day");
//   switch (day){

//     case '1':
//         console.log("Today is Monday");
//         break;
//     case '2':
//         console.log("Today is Tuesday");
//         break;
//     case '3':
//         console.log("Today is wednesday");
//         break;
//     case '4':
//         console.log("Today is Thrusday");
//         break;
//     case '5':
//         console.log("Today is Friday");
//         break;
//     case '6':
//         console.log("Today is Saturday");
//         break;
//     case '7':
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Not in range");
//   }

// Ternary operator

// let age = 17;
// age >= 18 ? console.log("u can drive") : console.log("u cannot drive the car");
// // to understand simply ternary operator is used to check the condition and if the condition fullfills it will implement the code after the(?) and atlast if its false it will implement the code after :

// let day = "monday";
// day == "monday" ? console.log("its good") : console.log("its not so good");

// challenge 4
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// let billValue = 275;
let billValue = 400;
let tip =
  billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
console.log(
  `The bill was ${billValue}, the tip was ${tip} and the total value ${
    billValue + tip
  }.`
);
