const greet = function () {
  let passengers = 0;
  return function () {
    passengers++;
    console.log(`hello${passengers}`);
  };
};
const passInfo = greet();

passInfo();
passInfo();
