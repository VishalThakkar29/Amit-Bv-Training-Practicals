// //Interface is similar to the class but its gives us the struture of the obejct to be made
// //example
// interface Person {
//     name: string;
//     age: number;

//     greet(note: number): void;
//   }

//   //we need to create an object using this above object type
//   let data: Person;
//   data = {
//     name: "Amit",
//     age: 24,
//     greet(note: number) {
//       console.log(`${note} ${this.name}`);
//     },
//   };
//   data.greet(25);

//interface with function

interface Add {
  (a: number, b: number): number;
}
let addfun: Add;
addfun = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(addfun(2, 3));
//interface with function and optina properties
interface Sub {
  (a: number, b: number, c?: number): any; //this c is optinal value to be added with the below function when we call it
}
let subfun: Sub;
subfun = (n1: number, n2: number) => {
  return n1 - n2;
};
console.log(subfun(2, 5));
