"use strict";
const target = Math.floor(Math.random() * 100);
console.log(target);
let count = 0;
const guessForm = document.getElementById("guess-form");
const guessInput = document.getElementById("guess-input");
const trialCount = document.getElementById("trial-count");
const resultMsg = document.getElementById("result-msg");
const resetBtn = document.getElementById("reset-btn");
const historyList = document.getElementById("history-list");
guessForm?.addEventListener("submit", checkNumber);
function checkNumber(event) {
    event.preventDefault();
    const userGuess = parseInt(guessInput.value);
    count++;
    trialCount.textContent = `시도: ${count}회`;
    const li = document.createElement("LI");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    console.log(userGuess);
    if (userGuess > target) {
        resultMsg.textContent = "Down!";
        span1.textContent = guessInput.value;
        span2.textContent = "Down!";
    }
    else if (userGuess < target) {
        resultMsg.textContent = "Up!";
        span1.textContent = guessInput.value;
        span2.textContent = "Up!";
    }
    else {
        resultMsg.textContent = `정답입니다! 시도 횟수: ${count}회`;
        span1.textContent = guessInput.value;
        span2.textContent = "정답!";
        resetBtn.style.display = "block";
        resultMsg.style.color = "rgb(54, 135, 38)";
        guessInput.disabled = "true";
    }
    li.append(span1, span2);
    historyList.append(li);
    guessInput.value = "";
    guessInput.focus();
}
resetBtn?.addEventListener("click", () => {
    location.reload();
});
