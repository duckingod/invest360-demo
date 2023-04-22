const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const outputPanel = document.querySelector('.output-panel');
const score = document.getElementById('score');
const feedbackList = document.getElementById('feedback-list');

submitBtn.addEventListener('click', () => {
  const userOpinion = userInput.value.trim();
  
  if (userOpinion !== '') {
    const analysisResult = analyzeOpinion(userOpinion);
    score.textContent = analysisResult.score;
    renderFeedback(analysisResult.feedback);
    outputPanel.style.display = 'flex';
  }
});

function analyzeOpinion(opinion) {
  const result = { score: 53, feedback: [
    'some feedback'
  ] };
  
  // Add your analysis logic here
  
  return result;
}

function renderFeedback(feedback) {
  feedbackList.innerHTML = '';
  
  feedback.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.label}: <span>${item.text}</span>`;
    feedbackList.appendChild(li);
  });
}