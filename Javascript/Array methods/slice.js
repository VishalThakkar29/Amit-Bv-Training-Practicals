// const a = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; //splice creates a shallow copy of the array

// console.log(a.slice(3)); //[d,e,f,g]
// console.log(a.slice(-3)); //[e,f,g]
// console.log(a.slice(1, 4)); //output [b,c,d]
// console.log(a.slice(-5, -2)); //[c,d,e]
// console.log(a.slice(-2, -5)); //empty array

// //splice method   mutates the original  array
// const b = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// // console.log(b.splice(3)); //[d,e,f,g]
// // console.log(b); //as we knw the splice method mutetes the original array so now the b has only [a,b,c]
// // console.log(b.splice(2, 3)); //here it will start the execution from 2 and take upto 3 from the 2 so it will o/p [c,d,e]

// // console.log(a.reverse()); //this i will the original array items
// // console.log(a);

// const c = a.concat(b); //merge two arrays
// console.log(c);
// //we can do this using our spread operators also
// const d = [...a, ...b, ...c];
// console.log(d); //works same as the concat method

// ///join

// console.log(b.join('hi')); //out put will be string value and all elemnts will be joined by hi in between

// ////at method
// //used to the element at specified location
// console.log(a.at(-1)); //it will give us the last element of the array in the form of string

// //its similar to
// console.log(a[a.length - 1]);
// console.log(a.slice(-1)[0]);

// //at is applicable to the strings alsos
// const e = 'hello this is';
// console.log(e.at(-1)); //this will give us the last elemnt of the string
