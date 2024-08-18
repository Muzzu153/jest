function calculatorObj() {
  const add = (num1, num2) => num1 + num2;
  const sub = (num1, num2) => num1 - num2;
  const mul = (num1, num2) => num1 * num2;
  const div = (num1, num2) => num1 / num2;
  return { add, sub, mul, div };
}

const calculator = calculatorObj();

// console.log(calculator.add(1, 1));
export default calculator;
