
// Task 5 : Factorial of a Number

let number;

do {
  number = Number(prompt("Enter a number:"));
} while (isNaN(number));

let factorial = 1;

for (let i = 1; i <= number; i++) {
  factorial *= i;
}


console.log(factorial);
