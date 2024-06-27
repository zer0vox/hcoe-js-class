const gender = prompt("Please enter your gender (male or female):");
//three equality for strict equality and coercion ie use === check data typr , value and give boolean value
/*if (gender === "male") {
    alert(`you are ${gender}`);
} else if (gender === "female") {
    alert(`you are ${gender}`);
} else {
    alert("Welcome!");
}*/
gender === "male"
  ? alert(`you are ${gender}`)
  : gender === "female"
  ? alert(`you are ${gender}`)
  : alert("others");
