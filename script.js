const result = document.querySelector("#result");
const score = document.querySelector("#score");
const form = document.querySelector("form");
const input = document.querySelector("input");
const livesDisplay = document.querySelector("#lives");
const guessedNumber = document.querySelector("#guessedNumber");
const checkBtn = document.querySelector("#checkBtn");
const newGameBtn = document.querySelector("#newGameBtn");

let randomNumber = Math.round(Math.random() * 20) + 1;

let scores = 0;
let lives = 3;

newGameBtn.disabled = true;
newGameBtn.addEventListener("click", () => {
  location.reload();
});

score.textContent = "Scores: " + String(localStorage.getItem("scores"));
var re = new RegExp("Scores: null");
if (re.test(score.textContent)) {
  score.textContent = "Scores: 0";
}
scores = +localStorage.getItem("scores");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  score.textContent = "Scores: 0";
  const value = +input.value;
  if (input.value === "") {
    result.innerText = "Print Your Guess";
    return;
  }
  if (value === randomNumber) {
    scores = scores + 1;
    localStorage.setItem("scores", scores);
    result.innerText = "Congratulations! 🥳";
    result.style.color = "green";
    score.textContent = "Scores: " + String(localStorage.getItem("scores"));
    guessedNumber.innerHTML = `👉 ${randomNumber} 👈`;
    newGameBtn.disabled = false;
    checkBtn.disabled = true;
  } else if (value > randomNumber) {
    result.innerText = "Your guess is too high 🙄";
  } else if (value < randomNumber) {
    result.innerText = "Your guess is too low 😬";
  }
  if (value > randomNumber || value < randomNumber) {
    score.textContent = "Scores: " + String(localStorage.getItem("scores"));
    lives--;
    if (lives == 2) {
      livesDisplay.innerHTML = `Chances: 💖💖`;
    } else if (lives == 1) {
      livesDisplay.innerHTML = `Chances: 💖`;
    } else if (lives == 0) {
      result.innerText = "You lost the game ";
      guessedNumber.innerText = "😕";
      newGameBtn.disabled = false;
      checkBtn.disabled = true;
      livesDisplay.innerText = "No more chances 🤷‍♂️";
    }
  }
});
