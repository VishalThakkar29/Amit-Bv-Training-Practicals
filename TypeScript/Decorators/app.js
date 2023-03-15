"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Car = class Car {
    constructor(brand) {
        this.brand = brand;
        this.brand = brand;
    }
};
Car = __decorate([
    Driver,
    AddDriver("mike")
], Car);
function Driver(target) {
    console.log(target);
}
//Decorator Factories
function AddDriver(nameOfDriver) {
    return function (constructor) {
        console.log("hrllo");
    };
}
//Method Decorators
function OverLoad(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class Tool {
    constructor(surName) {
        this.surName = surName;
    }
    price() {
        console.log(`this costs 200$`);
    }
    print() {
        console.log(`printing tool`);
    }
}
__decorate([
    OverLoad
], Tool.prototype, "print", null);
