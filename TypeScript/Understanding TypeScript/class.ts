// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(4, 5));

// // using arrow function

// const addition = (a: number, b: number) => {
//   console.log(a + b);
// };

// addition(5, 10);
// //spread operator

// const original = ["mango", "banana", "chikoo"];
// const copied = ["graphes", ...original];
// console.log(copied);

// const org = {
//   name: "Amit",
//   age: 24,
// };

// const cop = {
//   name1: "pavan",
//   ...org,
// };

// console.log(cop);

// let data: void= "hello";
// let data1 = data;
// data1=data +"hello"

//classes in typescript
//classes in ts
// class Department {
//   private name: string;
//   private age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }
//   logging() {
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// class ItDepartment extends Department {}
// const account = new ItDepartment("Amit", 25);
// console.log(account.logging());
// class Department {
//   // private readonly id: string;
//   // private name: string;
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     // validation etc
//     // this.id = 'd2';
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   private lastReport: string;

//   get mostRecentReport() {
//     if (this.lastReport) {
//       return this.lastReport;
//     }
//     throw new Error("No report found.");
//   }

//   set mostRecentReport(value: string) {
//     if (!value) {
//       throw new Error("Please pass in a valid value!");
//     }
//     this.addReport(value);
//   }

//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//     this.lastReport = reports[0];
//   }

//   addEmployee(name: string) {
//     if (name === "Max") {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//     this.lastReport = text;
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const it = new ITDepartment("d1", ["Max"]);

// it.addEmployee("Max");
// it.addEmployee("Manu");

// // it.employees[2] = 'Anna';

// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment("d2", []);

// accounting.mostRecentReport = "Year End Report";
// accounting.addReport("Something went wrong...");
// console.log(accounting.mostRecentReport);

// accounting.addEmployee("Max");
// accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// // accountingCopy.describe();
