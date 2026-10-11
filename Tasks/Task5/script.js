

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

let user = {
  name ,
  age,
  hasAccess: age >= 20
};

console.log(user);


