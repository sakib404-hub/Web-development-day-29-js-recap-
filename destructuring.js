const product = {
  name: "Shirt",
  price: 500,
  quantity: 7,
};

const discount = (product.price * 20) / 100;
const youPay = product.price - discount;
const vatAmount = (product.price * 7) / 100;
const totalAmount = youPay + vatAmount;
console.log(totalAmount);
/**
 * Now the thing is i am using product price multiple times therefore i
 * had to write produt.price multiple time therefore i want to change that long
 * writting elememts into a small element
 */

const price = product.price; //we can write this way , this will work

//Destructuring an Object
const device = {
  name: "Mobile Phone",
  brand: "Xiomi",
  prize: 25000,
};
const { brand, prize } = device;
console.log(brand);
console.log(prize);

//Destructing an Array

const numbers = [10, 20, 40];
const [first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);

const marks = [90, 95];
const [math, phy] = marks;
console.log(math);
console.log(phy);

const user = {
  id: 42,
  user_name: "Shakib Hossen",
  year: 1993,
  isVarified: true,
};
const { user_name: un, isVarified: iv, salary: s } = user;
console.log(un);
console.log(iv);
console.log(s);
