let questions = [
  {
    question: "Number of days in a week?",
    answers: [5, 7, 8, 6],
    correct: 2,
  },
  {
    question: "What is 2 + 3?",
    answers: [4, 6, 5, 8],
    correct: 3,
  },
  {
    question: "Number of months in a year?",
    answers: [12, 10, 11, 9],
    correct: 1,
  },
  {
    question: "Which of the following is a programming language?",
    answers: ["Python", "Java", "JavaScript", "PHP"],  
    correct: "All",
  },
];

let score = 0;

questions.forEach(function (item) {

  // let question = item.question + "\n";

  // question += "1. " + item.answers[0] + "\n";
  // question += "2. " + item.answers[1] + "\n";
  // question += "3. " + item.answers[2] + "\n";
  // question += "4. " + item.answers[3] + "\n";
  // question += "Enter answer number";

  let question = `${item.question}
    1. ${item.answers[0]}
    2. ${item.answers[1]}
    3. ${item.answers[2]}
    4. ${item.answers[3]}
    Enter answer number`;

  let answer = Number(prompt(question));

  if (answer === item.correct|| item.correct === "All") {
    score++;
  }
});

alert("Your score: " + score + " / " + questions.length);



