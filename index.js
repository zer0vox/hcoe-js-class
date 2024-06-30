/*firstName = prompt("Enter your first name: ");
lastName = prompt("Enter your last name: ");
let formattedFirstName =
  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
//task 1
let formattedLastName =
  lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

let fullName = formattedFirstName.concat(" ", formattedLastName);

console.log(fullName);
//task 2
const num = prompt("Enter a number: ");
const formattedNum = new Intl.NumberFormat("en-IN").format(num);
console.log(formattedNum);

//sum of two numbers
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(110, 200));
*/
/*  1 default fucntion
    2 parameterized function
    3 closure
    4 IIFE
    5 explicit
    6 implicit
    7 anonymous 
    8 inline */

// 1 default function
// const paging = (num = 5) => {
//   console.log(num);
// };
// paging(1);
// paging();

// closure
// (() => {
//   console.log("IIFE");
// })();
//const rev = (num) => num.toString().split("");
// const rev = (num) => Number(num.toString().split("").reverse().join(""));
// console.log(rev(34223));
//accept string as a parametwe and counts number of vowels exclude y
// const vowel = (str) => str.split("");
// console.log(vowel("hello"));

// const tempconv = (temp, type = "C") =>
//   type === "C" ? (temp = ((temp - 32) / 9) * 5) : (temp / 5) * 9 + 32;

//console.log(tempconv(60, ""));
// const laptop = {
//   model: "Apple",
//   name: "m1 pro",
//   modelYear: 2021,
//   age: () => {
//     return 2024 - this.modelYear;
//   },
//   fullname: function () {
//     return model + this.name;
//   },
// };
//2

// const prod = {
//   name: "headphones",
//   price: 83.7,
//   discount: "7%",
// };

// const getNewProduct = (product) => {
//   const { price, discount, ...rest } = product;
//   const discAmt = price > 100 ? 0.07 * price : 0.1 * price;
//   rest.price = price - discAmt;
//   rest.discount = price > 100 ? "10%" : "7%";
//   return rest;
// };
// const newProd = getNewProduct(prod);
// console.log(newProd);
// let flist1 = ["Noodle", "Pasta", "Ice-cream"];
// let flist2 = ["Fries", "Ice-cream", "Pizza"];
// const findcommon = (flist1, flist2) => {
//   return flist1.filter((item) => flist2.includes(item));
// };
// console.log(findcommon(flist1, flist2));
// const classes = [
//   { name: "Ram", age: 20 },
//   { name: "Sita", age: 15 },
//   { name: "Shyam", age: 40 },
// ];

// const agesorting = (classes) => {
//   return classes.sort((a, b) => a.age - b.age);
// };

// // console.log(agesorting(classes));
// const countries = ["Nepal", "USA", "Australia"];

// const findMaxLength = (countries) => {
//   const lengths = countries.map((country) => country.length);
//   const maxLength = Math.max(...lengths);
//   const maxLengthIndex = lengths.indexOf(maxLength);
//   return countries[maxLengthIndex];
// };

// console.log(findMaxLength(countries));

// const findcommon = (flist1, flist2) => {
//   for (i = 0; i < flist1.length; i++) {
//     for (j = 0; j < flist2.length; j++) {
//       if (flist1[i] === flist2[j]) return true;
//     }
//   }
//   return false;
// };

// let flist1 = ["admin", "manager"];
// let flist2 = ["user", "receptionist", "manager"];

// console.log(findcommon(flist1, flist2));

// const findcommon = (flist1, flist2) => {
//   return flist1.some(item => flist2.includes(item));
// };

// let flist1 = ["admin", "manager"];
// let flist2 = ["user", "receptionist", "manager"];

// console.log(findcommon(flist1, flist2));
//Get the total number of characters by eye color (hint. a map of eye color to count)
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
const eyeColorCount = characters.reduce((accumulator, character) => {
  const { eye_color } = character;
  if (accumulator[eye_color]) {
    accumulator[eye_color]++;
  } else {
    accumulator[eye_color] = 1;
  }
  return accumulator;
}, {});

console.log(eyeColorCount);
