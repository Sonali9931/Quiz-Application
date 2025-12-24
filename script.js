const quiz = [
  {
    q: "What is HTML?",
    a: "Markup Language",
    b: "Programming Language",
    c: "Database",
    d: "Server",
    correct: "a"
  },
  {
    q: "What is CSS?",
    a: "Styling",
    b: "Logic",
    c: "Database",
    d: "Language",
    correct: "a"
  },
  {
    q: "What is JavaScript?",
    a: "Scripting Language",
    b: "Database",
    c: "Server",
     correct: "a"
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[index];
  document.getElementById("q-no").innerText = "Question "+ (index + 1);

  question.innerText = q.q;
  opt1.innerText = q.a;
  opt2.innerText = q.b;
  opt3.innerText = q.c;
  opt4.innerText = q.d;
}

function nextQuestion() {
  const ans = document.querySelector('input[name="answer"]:checked');
  if (!ans) return alert("Select an option");

  if (ans.value === quiz[index].correct) {
    score++;
  }

  ans.checked = false;
  index++;

  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML =
      `<h2>Quiz Finished</h2>
      <h3>Your Score: ${score}</h3>`;
  }
}

loadQuestion();