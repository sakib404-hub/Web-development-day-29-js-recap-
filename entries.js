const employee = {
  name: "Raja Ranu",
  designation: "QA",
  salary: 20000,
  experience: 1,
};

//Getting the keys from an object
const keys = Object.keys(employee);
console.log(keys);

//Getting the values from an object
const values = Object.values(employee);
console.log(values);

//Getting the key-value in pairs
const keyValue = Object.entries(employee);
console.log(keyValue);
