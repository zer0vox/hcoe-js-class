//const gender = prompt("Please enter your gender (male or female):");
//three equality for strict equality and coercion ie use === check data typr , value and give boolean value
/*if (gender === "male") {
    alert(`you are ${gender}`);
} else if (gender === "female") {
    alert(`you are ${gender}`);
} else {
    alert("Welcome!");

gender === "male"
  ? alert(`you are ${gender}`)
  : gender === "female"
  ? alert(`you are ${gender}`)
  : alert("others");

switch (gender) {
  case "male":
    alert(`you are ${gender}`);
    break;
  case "female":
    alert(`you are ${gender}`);
    break;
  default:
    alert("others");
}
const marks = prompt("Please enter your marks:");

switch (true) {
  case marks > 80:
    alert("A");
    break;
  case marks >= 60 && marks <= 80:
    alert("B");
    break;
  default:
    alert("C");
    break;
}

alert(`Your grade is ${grade}`);
*/
//write a js program to ask user for username and password and welcome only if username === password
const name = prompt("Please enter your name:");
const username = prompt("Please enter your username:");
const password = prompt("Please enter your password:");

if (username === name && password === name) {
  alert("Welcome!" + name);
} else {
  alert("Incorrect username or password.");
}
