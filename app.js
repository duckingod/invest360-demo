const userInput = document.getElementById("user-input");
const submitBtn = document.getElementById("submit-btn");
const scorePanel = document.querySelector(".score-panel");
const feedbackPanel = document.querySelector(".feedback-panel");
const score = document.getElementById("score");
const feedbackList = document.getElementById("feedback-list");

submitBtn.addEventListener("click", function() {
  if (userInput.value.trim() === "") {
    alert("Please enter your opinion");
    return;
  }

  // simulate a score calculation
  const randomScore = Math.floor(Math.random() * 100);
  score.textContent = randomScore;

  // simulate a feedback list
  const feedbackItems = [
    "Your opinion is well-reasoned.",
    "You could provide more evidence to support your opinion.",
    "Your opinion is too focused on short-term gains.",
  ];

  feedbackList.innerHTML = feedbackItems.map(item => `<li>${item}</li>`).join("");

  // slide in the score panel and feedback panel
  scorePanel.style.display = "block";
  feedbackPanel.style.display = "block";
});