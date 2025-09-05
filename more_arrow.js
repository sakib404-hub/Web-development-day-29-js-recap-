const getTax = (amount, taxrate) => {
  let tax = (amount * taxrate) / 100;
  return tax;
};
console.log(getTax(100, 20));

// Single perameter
const square = (number) => {
  return number * number;
};

// const square = (x) => x * x;
const getHalf = (number) => number / 2;

const FirstElement = (number) => number[0];

const logit = () => {
  console.log(
    "This is the function without any perameter and passing any arguments"
  );
};

console.log(getHalf(110));
console.log(square(10));
console.log(FirstElement([18, 10, 17, 27]));
logit();

// Annonymous Function
// document.getElementById().addEventListener("click", () => {});
// document.getElementById().addEventListener("click", (event) => {});

// checks a number is prime or not
const isPrime = (number) => {
  let prime = true;
  if (number < 2) {
    // console.log(`The number is Not Prime`);
    prime = false;
  } else if (number == 2) {
    // console.log(`The number is a prime number ${number}`);
    prime = true;
  } else {
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
  }
  if (prime) {
    console.log(`The number is a prime number : ${number}`);
  } else {
    console.log(`The number is not a prime number : ${number}`);
  }
};

isPrime(37);
