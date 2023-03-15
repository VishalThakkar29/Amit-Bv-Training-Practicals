@Driver
@AddDriver("mike")
class Car {
  constructor(public brand: string) {
    this.brand = brand;
  }
}

function Driver(target: Function) {
  console.log(target);
}
//Decorator Factories
function AddDriver(nameOfDriver: string) {
  return function (constructor: Function) {
    console.log("hrllo");
  };
}

//Method Decorators

function OverLoad(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

class Tool {
  surName: string;
  constructor(surName: string) {
    this.surName = surName;
  }

  price() {
    console.log(`this costs 200$`);
  }

  @OverLoad
  print() {
    console.log(`printing tool`);
  }
}
