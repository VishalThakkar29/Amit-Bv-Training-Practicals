function add(num1: number, num2: number, strng: string, boolval: boolean) {
  if (boolval === true) return num1 + num2;
  else {
    return strng;
  }
}

let a: number = 20;
let b = 30;
const c = "hello there";
const d = false;
const addition = add(a, b, c, d);
console.log(addition);
