// = assignment operator
// == comparison operator . compare with value only
// === strict comparison operator , compare with value and data type

// let user = "" ;

// console.log(typeof user == "");

// if(user == ""){
//   console.log("Login in First");
// }

// let user = "Osama";
// if(user){
//   console.log(`Hello ${user}`);
// }else{
//   console.log("Login in First");
// }
// truthy values : true , 1 , "string" , [] , {} , function(){}
// falsy values : false , 0 , "" , null , undefined

// let age = Number(prompt("Enter your age"));
// console.log(typeof age);

// if (age >= 18 && age <= 50) {
//   console.log("You are an adult");
// } else if (age > 50) {
//   console.log("You are a senior");
// } else {
//   console.log("You are a child");
// }

// console.log(age);
// console.log(Number(age)); // convert string to number
// console.log(String(age)); // convert number to string
// age1 = 25;

// if (age1==="25") {
//   console.log("You are an adult");
// }//method chain

// if(condition){
//   condition true
// }else{
//   condition false
// }
//block of code
//
// if(condition1){
//   condition1 true
// }else if(condition2){
//   condition2 true
// }else{
//   condition false
// }

// if (condition) {
//   return "";
// }
// return ""; // return statement is used to return a value from a function and exit the function

// function checkLogin() {
//   let login = false;
//   if (login) {
//     return "success";
//   }
//   return "failed";
// }
// console.log(checkLogin());

// let email = prompt("Enter your email");
// if(email.endsWith("@gmail.com")){
//   console.log("Valid Email");
// }else if( email.endsWith("@hotmail.com")){
//   console.log("Valid Email");
// }else if( email.endsWith("@yahoo.com")){
//   console.log("Valid Email");
// }else{
//   console.log("Invalid Email");
// }

// switch (expression) {
//   case 1:
//     // code block
//     break;
//   case 2:
//     // code block
//     break;
//   case 3:
//     // code block
//     break;
//   default:
//     // code block
// }

// let input = Number(prompt("Enter Number between 1 to 5"));
// switch (input) {
//   case 1:
//     console.log("Sales");
//     break;
//   case 2:
//     console.log("Marketing");
//     break;
//   case 3:
//     console.log("Finance");
//     break;
//   case 4:
//     console.log("customer Service");
//     break;
//   case 5:
//     console.log("support");
//     break;
//   default:
//     console.log("Invalid Number");
// }

//ternary operator === shorthand for if else statement
// condition ? true : false

// let gender = prompt("Enter your gender (male/female): ");
// let message = gender == "male" ? "blue" : "pink";
// console.log(message);

// let mark = 55;
// if (mark >= 95) {
//   console.log("A+");
// } else if (mark >= 90) {
//   console.log("A");
// } else if (mark >= 80) {
//   console.log("B");
// } else if (mark >= 70) {
//   console.log("C");
// } else if (mark >= 60) {
//   console.log("D");
// } else {
//   console.log("Failed");
// }

// console.log(
//   mark >= 95
//     ? "A+"
//     : mark >= 90
//       ? "A"
//       : mark >= 80
//         ? "B"
//         : mark >= 70
//           ? "C"
//           : mark >= 60
//             ? "D"
//             : "Failed",
// );


//nullish coalescing operator (??) === return the right value if the left value is null or undefined
// let user = "Osama";
// console.log(user ?? "Guest"); 

// console.log(user&&"Done");// logical AND operator (&&) === return the right value if the left value is truthy




// object:
// let user= {
//   key:"value",
// } in java script object is a collection of key value pairs

// {
// "name": "Osama",
// "age": 23,
// "country": "Palestine", 
// } //json object is a collection of key value pairs in json format
// Docker is a containerization platform that allows developers to package, distribute, and run applications in isolated environments 


// let person = {
//   name: "Osama",
//   age: 23,
//   country: "Palestine",
// };
// console.log(person.name);

