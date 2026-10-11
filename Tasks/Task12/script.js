


let text = "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.";

let firstCount = 20;
let lastCount = 20;

if (text.length > firstCount + lastCount) {
  let firstPart = text.slice(0, firstCount);
  let lastPart = text.slice(text.length - lastCount);
  let dots = ".".repeat(text.length - firstCount - lastCount);

  text = firstPart + dots + lastPart;
}

console.log(text);




//Using Arrow Function
//    فقط لتجربة فكره الدوال
// let hideMiddle = (text, firstCount, lastCount) => {
//   if (text.length <= firstCount + lastCount) {
//     return text;
//   }

//   let firstPart = text.slice(0, firstCount);
//   let lastPart = text.slice(text.length - lastCount);
//   let dots = ".".repeat(text.length - firstCount - lastCount);

//   return firstPart + dots + lastPart;
// };

// let text = "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.";

// console.log(hideMiddle(text, 20, 20));

