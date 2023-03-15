// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; //string array
//   role: [number, string]; //tuple
// } = {
//   name: "Amit",
//   age: 24,
//   hobbies: ["umesh pajji", "pawan pajji"],
//   role: [22, "Trainee"],
// };

// person.role.push(23);
// person.hobbies.push("hdshfhd");
// console.log(person.hobbies);
// console.log(person.role);
enum Details {
  ADMIN = 5,
  READ_ONLY = "Admin",
  AUTHOR = 10,
}
const person = {
  name: "Amit",
  age: 25,
  detail: Details.READ_ONLY,
};
console.log(person.detail);
