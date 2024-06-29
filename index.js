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
