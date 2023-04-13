const result = document.querySelector("#result");
const score = document.querySelector("#score");
const form = document.querySelector("form");
const input = document.querySelector("input");
const livesDisplay = document.querySelector("#lives");
const guessedNumber = document.querySelector("#guessedNumber");
const checkBtn = document.querySelector("#checkBtn");
const newGameBtn = document.querySelector("#newGameBtn");

let randomNumber = Math.round(Math.random() * 20) + 1;
console.log(randomNumber);

let scores = 0;
let lives = 3;



form.addEventListener("submit", (e) => {
  e.preventDefault();
  score.textContent = "Scores: 0";
  const value = +input.value;
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
newGameBtn.addEventListener("click", () => {
  location.reload();
});

newGameBtn.disabled = true;

score.textContent = "Scores:  " + String(localStorage.getItem("scores"));

console.log(score.textContent);
scores = +localStorage.getItem("scores");

console.log(typeof null);
