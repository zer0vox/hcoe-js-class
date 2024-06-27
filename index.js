firstName = prompt("Enter your first name: ");
lastName = prompt("Enter your last name: ");
let formattedFirstName =
  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

let formattedLastName =
  lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

let fullName = formattedFirstName.concat(" ", formattedLastName);

console.log(fullName);
