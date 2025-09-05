// function declearation
function factorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(5));

//Function Expression
let addition = function (numberOne, numberTwo) {
  return numberOne + numberTwo;
};

console.log(addition(10, 16));

// Now we will know about the arrow function
//Array Function

const add = (num1, num2) => num1 + num2;
const multiplication = (num1, num2) => num1 * num2;
const sumAll = (a, b, c, d, e) => a + b + c + d + e;
console.log(multiplication(10, 6));
console.log(add(10, 9));

const FirstBig = (numberOne, numberTwo) => numberOne > numberTwo;
console.log(FirstBig(15, 11));

const doMath = (x, y) => {
  let makeDouble = x * 2;
  let makeTripple = y * 3;
  return makeDouble + makeTripple;
};

console.log(doMath(2, 3));

const fact = (number) => {
  if (number == 1 || number == 0) {
    return 1;
  }
  return number * fact(number - 1);
};

console.log(factorial(5));
