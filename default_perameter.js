function addition(numberOne = 0, numberTwo = 0) {
  //value that are decleared in the function as the value is getting while
  //calling these are known as the perameter
  //   const undefined = number + undefined
  const sum = numberOne + numberTwo;
  console.log(numberOne, numberTwo, sum);
}

addition(10);
//When we are calling the function with those perameters those are known as the argumnets

function multiply(numberOne = 1, numberTwo = 1) {
  let multiply = numberOne * numberTwo;
  console.log(multiply);
}

multiply(10, 10);
multiply(10);

function fullName(firstName = "", lastName = "") {
  let fullname = firstName + " " + lastName;
  console.log(fullName);
}

/**
 * When we are doing the addition the default value will be ----> 0
 * when we are doing the substraction the default valus will be -----> 0
 * when we are doing the multiplication the default value will be ---->1
 * when we are operating with some array the default value will be black array----->[]
 * when are dealing with the string it can be empty string -----> " "
 */
