

let number;

do {
  number = Number(prompt("Enter an Integer Number:"));
} while (!Number.isInteger(number) || number < 0);//Check if the input is a non-negative integer

let factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log(`Factorial of ${number} = ${factorial(number)}`);

