let users = [
  { name: "Mohammed", weight: 90 },
  { name: "Ali", weight: 80 },
  { name: "Omar", weight: 75 },
  { name: "Ahmed", weight: 85 },
  { name: "Sara", weight: 70 },
  { name: "Laila", weight: 65 },
  { name: "Hassan", weight: 95 },
  { name: "Mona", weight: 60 },
  { name: "Khalid", weight: 100 },
  { name: "Noura", weight: 55 },
];

function checkLoad(users) {
  let totalWeight = 0;

  users.forEach((user) => {
    totalWeight += user.weight;
  });

  if (users.length >= 10 || totalWeight >= 1000) {
    console.log("الحمولة زائدة عن الحد المسموح");
  } else {
    console.log("الحمولة ضمن الحد المسموح");
  }
}

checkLoad(users);

