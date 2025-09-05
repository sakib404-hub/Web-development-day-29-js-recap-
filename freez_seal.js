const employee = {
  name: "Raja Rani",
  designation: "QA",
  salary: 25000,
  age: 22,
  experience: 1,
};

console.log(employee);

// Removing property from object
delete employee.experience;
// delete employee.salary;

employee.salary += 5000;
employee.location = "Dhaka";
console.log(employee);

// Preventing the modification of the existing properties and preventing from adding new properties
Object.freeze(employee);

delete employee.location;
console.log(employee);

//Prevent adding/removing properties but allow updating values
Object.seal(employee);
employee.salary = 32000;
console.log(employee);
