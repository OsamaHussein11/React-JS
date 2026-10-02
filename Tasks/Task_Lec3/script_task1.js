// Task 1  :  Object

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

let user = {
  name: name,
  age: age,
  hasAccess: age >= 20
};

console.log(user);


