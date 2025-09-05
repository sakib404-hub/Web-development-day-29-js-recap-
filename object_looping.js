const numbers = [1, 2, 3, 4, 5, 6];
for (let number of numbers) {
  console.log(number);
}

//Now  the main part object
const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 25000,
  age: 22,
  experience: 1,
};

// console.log(employee.name);
//Direct Looping through
for (let key in employee) {
  // const value = employee[name]
  //   console.log(value);
  const value = employee[key];
  console.log(key, ":", value);
}

// first finding the keys therefore looping through
const keys = Object.keys(employee);
console.log(keys);
for (let key of keys) {
  const value = employee[key];
  console.log(key, ":", value);
}
