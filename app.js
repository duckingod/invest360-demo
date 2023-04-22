const form = document.querySelector('form');
const resultWrapper = document.querySelector('.result-wrapper');
const scorePanel = document.querySelector('.score-panel');
const feedbackPanel = document.querySelector('.feedback-panel');
const score = document.querySelector('#score');
const feedback = document.querySelector('#feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const opinion = document.querySelector('#opinion').value;
  // const result = analyzeOpinion(opinion);
  const result = {
    score: 86,
    feedback: '神 feedback'
  }

  displayScore(result.score);
  displayFeedback(result.feedback);

  resultWrapper.classList.remove('hidden');
});

function displayScore(scoreValue) {
  score.textContent = scoreValue;
  scorePanel.classList.add('animated', 'fadeIn');
}

function displayFeedback(feedback) {
  const feedbackDiv = document.querySelector("#feedback");
  feedbackDiv.innerHTML = feedback;
  feedbackDiv.classList.remove("hidden");
}