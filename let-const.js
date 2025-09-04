//ES6

//const meaning constant the value of the variable will not change
//no matter what the situation is
const name = "Bangladesh";
const countryName = "BD" + name;
console.log(countryName);

//Where as let allows us to change the variabale value if we want to
let price = 120;
price = 100;
console.log(price);

//we will not use var in any case
var device = "laptop";
console.log(device);

const dress = ["shirt", "pant", "genji"];
dress.push("maflar");
console.log(dress);

const student = {
  name: "Shakib Hosse",
  marks: 50,
};

student.marks += 10;
console.log(student.marks);
