'use strict';
//Convert string into the numbers
const num='20157986115';
console.log(Number(num));
//Method 2

console.log(+(num));
  

//Parsing
//parseInt
console.log(Number.parseInt("23exam"));
console.log(Number.parseInt("exam23"));
//parseFloat
console.log(Number.parseFloat('23.52exam'));
console.log(Number.parseInt("23.52exam"));
console.log(Number.parseFloat("exam23.22"));

//isFinite
console.log(Number.isFinite(23/0));


//Math and Rounding

console.log(Math.sqrt(25));
console.log(25**(1/2));//sqrt 
console.log(Math.trunc(8**(1/3)));

console.log(Math.max(23,25,26,29,28));
console.log(Math.min(21,20,14,56,98));


//Rounding the Integers

console.log(Math.round(23.22));
console.log(Math.round("23.2"));//here it does type conversion
console.log(Math.round(23.7));

console.log(Math.ceil(26.33));
console.log(Math.floor(28.9));

//Rounding the Decimals 
console.log((28.53).toFixed(0));
console.log((28.36).toFixed(1));
console.log((28.56).toFixed(2)); 


//Remainder

// console.log(5%2);//output will be remainder;
const isEven=(val)=>{
return val%2 ? console.log(`${val} is a odd number`): console.log(`${val} is an Even Number`) ;
};
isEven(53);

//Numeric Seperator
//used to add the seperator in give the code better understandibility
console.log(23_222);


//bigInt

console.log(1122115415241564361212124321);
console.log(1122115415241564361212124321n);
console.log(BigInt(232541458741225458754));
   

//exceptions
console.log(20n===20);
console.log(20n==20);

console.log(20n > 18);



//Dates and Times

console.log(new Date('January 27 2023 12:05:23'));
const pavanBrth=new Date(1999,9,8,0,30,40);
console.log(pavanBrth);
console.log(pavanBrth.getFullYear());
console.log(pavanBrth.getDate());
console.log(pavanBrth.getDay());
console.log(pavanBrth.getHours());
console.log(pavanBrth.toISOString());
console.log(pavanBrth.getTime());
console.log(Date(939322840000))//time stamp

// function to calculate the number of days passed

const calcDays=(date1,date2)=>{
 return (date1-date2)/(1000*60*60*24);
};
const calcNew=calcDays(new Date(2022 ,1,27),new Date(2022,1,2));
console.log(calcNew);

const date10=Intl.DateTimeFormat('eng-us').format(pavanBrth);
console.log(date10);

//setTimeout
const ing=["tomato","spinach"];
//  const myinterval=setTimeout((ing1,ing2)=>{
//   return console.log(`This is the pizza deleivery app ${ing1} and ${ing2}`)
 
// },3000,...ing);

 
  const myinterval=setInterval((ing1,ing2)=>{
    return console.log(`This is the pizza deleivery app ${ing1} and ${ing2}`)
   
  },3000,...ing);
  console.log('waiting');
 if(ing.includes("tomato"))
  clearTimeout(myinterval);