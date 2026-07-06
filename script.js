let time = 900; 
let timerInterval;

const questions = [
  {q: "What is the SI unit of force?", a: ["Newton", "Joule", "Watt", "Pascal"], ans: 0},
  {q: "Communication is derived from which Latin word?", a: ["Communicare", "Commune", "Communis", "Commodo"], ans: 0},
  {q: "Derivative of x^2 is?", a: ["x", "2x", "x^2", "2"], ans: 1},
  {q: "Water chemical formula?", a: ["H2O", "CO2", "NaCl", "O2"], ans: 0},
  {q: "Who is the father of Biology?", a: ["Aristotle", "Newton", "Einstein", "Darwin"], ans: 0},
  {q: "Capital of Taraba State?", a: ["Jalingo", "Wukari", "Gembu", "Takum"], ans: 0},
  {q: "2 + 2 * 2 = ?", a: ["8", "6", "4", "2"], ans: 1},
  {q: "pH of pure water?", a: ["0", "7", "14", "1"], ans: 1},
  {q: "Speed = ?", a: ["Distance/Time", "Time/Distance", "Force/Mass", "Mass/Force"], ans: 0},
  {q: "Mitochondria is the ___ of the cell", a: ["Brain", "Powerhouse", "Kitchen", "Heart"], ans: 1},
  {q: "HTML stands for?", a: ["HyperText Markup Language", "HighText Machine Language", "HyperTabular Markup Language", "None"], ans: 0},
  {q: "Largest organ in human body?", a: ["Liver", "Brain", "Skin", "Heart"], ans: 2},
  {q: "Integral of 2x dx?", a: ["x^2 + C", "2x^2 + C", "x + C", "2x + C"], ans: 0},
  {q: "O2 is the chemical formula for?", a: ["Ozone", "Oxygen", "Carbon dioxide", "Water"], ans: 1},
  {q: "First President of Nigeria?", a: ["Nnamdi Azikiwe", "Tafawa Balewa", "Obasanjo", "Gowon"], ans: 0}
];

function startQuiz() {
  document.querySelector('.login-box').classList.add('hidden');
  document.getElementById('quiz-container').classList.remove('hidden');
  loadQuestions();
  timerInterval = setInterval(updateTimer, 1000);
}

function loadQuestions() {
  let box = document.getElementById('question-box');
  box.innerHTML = "";
  questions.forEach((item, i) => {
    box.innerHTML += `<p><b>${i+1}. ${item.q}</b></p>` + 
    item.a.map((opt, j) => `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label>`).join('');
  });
}

function updateTimer() {
  time--; 
  let min = Math.floor(time/60), sec = time%60;
  document.getElementById('timer').innerText = `Time: ${min}:${sec < 10 ? '0' : ''}${sec}`;
  if(time <= 0) submitQuiz();
}

function submitQuiz() {
  clearInterval(timerInterval);
  alert("Quiz Submitted! Your score will be shown soon.");
}
