const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 1099];
console.log(numbers);
console.log(...numbers);

// const arrayNumbers = (...numbers);
const max = Math.max(...numbers);
console.log(max);

/**
 * In js when we copy array to another array it takes the
 * references to the first array therefore if we try to change the second
 * array that we copied from the first array it also changes the first Array
 */
const first = [1, 2, 3, 4, 5, 6];
const second = first;
// first.push(7);
second.push(7);
console.log(first);

/**
 * to sove this issue we came up with a idea that when we are taking the
 * array copied we are only taking the numbers of the array not the full
 * array with the references
 */
const third = [1, 2, 3, 4, 5, 6];
let forth = [];
forth = [...third];
const fifth = [...third, 0, 10, 190, 200];
// first.push(7);
forth.push(7);
console.log(...forth);
console.log(...third);
console.log(...fifth);

const ages = [10, 23, 25, 29];
const prices = [190, 200, 210, 300];
const all = [...ages, ...prices];
console.log(all);
console.log(...all);

/**
 * In case of the objecct
 */

const person = {
  name: "Mizan Talukdar",
  age: 24,
  salary: 25000,
};

const employee = {
  designation: "Senior Officer",
  ...person,
};
console.log(employee);

// Using this with the arrow function
const total = (x, y, z) => {
  return x + y + z;
};
const result = total(50, 60, 70);
console.log(result);
const digits = [20, 40, 60];
const result2 = total(...digits);
console.log(result2);
