function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return "Помилка: ділення на нуль";
  }
  return a / b;
}

let num1 = +prompt("Введіть перше число:");
let operator = prompt("Введіть арифметичну операцію (+, -, *, /):");
let num2 = +prompt("Введіть друге число:");
let result;

switch (operator) {
  case "+":
    result = addition(num1, num2);
    break;
  case "-":
    result = subtraction(num1, num2);
    break;
  case "*":
    result = multiplication(num1, num2);
    break;
  case "/":
    result = division(num1, num2);
    break;
  default:
    result = "Помилка: невідомий оператор";
}

console.log("Результат:", result);
