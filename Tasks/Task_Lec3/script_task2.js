
// Task 2: Array of Objects

let users = [
  { name: "OsamaHussein", email: "osama@gmail.com", type: "admin" },
  { name: "MohammedNaji", email: "mohammed@gmail.com", type: "admin" },
  { name: "Ali", email: "ali@gmail.com", type: "user" },
  { name: "Sara", email: "sara@gmail.com", type: "user" },
  { name: "Omar", email: "omar@gmail.com", type: "user" },
  { name: "Noor", email: "noor@gmail.com", type: "user" },
  { name: "Khaled", email: "khaled@gmail.com", type: "admin" },
  { name: "Hala", email: "hala@gmail.com", type: "user" },
  { name: "Yousef", email: "yousef@gmail.com", type: "user" },
  { name: "Mona", email: "mona@gmail.com", type: "user" },
  { name: "Adam", email: "adam@gmail.com", type: "user" },
  { name: "Lina", email: "lina@gmail.com", type: "admin" },
  { name: "Sami", email: "sami@gmail.com", type: "user" },
  { name: "Rana", email: "rana@gmail.com", type: "user" },
  { name: "Hassan", email: "hassan@gmail.com", type: "user" }
];

let userCount = 0;
let adminCount = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].type === "admin") {
    adminCount++;
  } else if (users[i].type === "user") {
    userCount++;
  }
}

console.log("Number of Users: " + userCount);
console.log("Number of Admins: " + adminCount);

