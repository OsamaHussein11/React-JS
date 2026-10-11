let choices = ["حجر", "ورقة", "مقص"];
let rounds = Number(prompt("كم جولة بدك تلعب؟")); //الفكره تكرار الجولات للعبة بناء على طلب المستخدم

for (let i = 1; i <= rounds; i++) {
  let playerChoice;

  do {
    playerChoice = prompt(`الجولة ${i}
اختر: حجر، ورقة، مقص`);

    if (!choices.includes(playerChoice)) {
      alert("اختيار غير صحيح! اكتب حجر أو ورقة أو مقص.");
    }
  } while (!choices.includes(playerChoice));

  let randomIndex = Math.floor(Math.random() * choices.length);
  let opponentChoice = choices[randomIndex];

  let result;

  // Number of possible cases: 3 × 3 = 9

  if (playerChoice === opponentChoice) {
    result = "تعادل!";
  } else if (
    (playerChoice === "حجر" && opponentChoice === "مقص") ||
    (playerChoice === "ورقة" && opponentChoice === "حجر") ||
    (playerChoice === "مقص" && opponentChoice === "ورقة")
  ) {
    result = "فزت!";
  } else {
    result = "خصمك فاز!";
  }

  alert(`اختيارك: ${playerChoice}
اختيار خصمك: ${opponentChoice}
النتيجة: ${result}`);
}

alert("خلصت الجولات ");
