let numberOfUsers = Number(prompt("Enter the number of users:"));

let users = [];

for (let i = 0; i < numberOfUsers; i++) {
  let name = prompt(`Enter user ${i + 1} name:`);
  let email = prompt(`Enter the email of ${name}:`);

  users.push({
    name: name,
    email: email
  });
}

function filterEmail(email) {
  return !email.toLowerCase().includes("test");
}

let filteredUsers = users.filter((user) => filterEmail(user.email));

filteredUsers.forEach((user) => {
  console.log(`Name: ${user.name} | Email: ${user.email}`);
});

