


function findLongestName(...names) {
  if (names.length > 10) {
    console.log("This function accepts a maximum of 10 names.");
    return;
  }

  let longestName = "";

  names.forEach((name) => {
    if (name.length > longestName.length) {
      longestName = name;
    }
  });

  console.log(`Longest name: ${longestName}`);
}

findLongestName("Sama", "Mohammed_Naji",  "Zaina", "Zain", "Hala", "Rana", "Yousef", "Hassan", "Mona", "Khalid");


