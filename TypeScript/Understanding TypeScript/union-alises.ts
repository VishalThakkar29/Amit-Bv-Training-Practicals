function add(
  input1: number | string,
  input2: number | string,
  typed: "as-number" | "as-string"
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    typed === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}
console.log(add(1, 2, "as-string"));
