const form = document.querySelector('form');
const container = document.querySelector('.container');
const resultWrapper = document.querySelector('.result-wrapper');
const scorePanel = document.querySelector('.score-panel');
const feedbackPanel = document.querySelector('.feedback-panel');
const score = document.querySelector('#score');
const feedback = document.querySelector('#feedback');

const inputText = `
我對 ASMedia 持買進態度，因為我認為 ASMedia 在 USB4 方面的領先技術將支持該公司在 2022 年和 2023 年的強勁盈利增長，並且我認為市場低估的新產品供應和客戶群擴張。 此外，從 2Q22 末開始的 AMD 600 系列新產品週期也將顯著提升 ASMedia 的收入。
`;

const scoreText = `
潛在報酬：5%
潛在風險：43%
`;

const feedbackText = `
請考慮以下幾項下行風險：
1. ABF 短缺時間長於預期或關鍵客戶的 ABF 分配優先級。
2. 美國對中國科技公司的廣泛禁令/限制。
3. 中國本土化需求放緩，客戶多元化失敗。
4. USB 3.1/3.2 標準的採用速度低於預期，USB 4.0 遷移也出現延遲。
5. 推遲將於 2H22 啟動的新設備控制器項目。
`;


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const opinion = document.querySelector('#opinion').value;

  // Show loading animation
  container.classList.add('loading');

  // Simulate delay for loading
  setTimeout(() => {
    const result = {
      score: scoreText.trim(),
      feedback: feedbackText,
    }

    displayScore(result.score);
    displayFeedback(result.feedback);

    // Hide loading animation
    container.classList.remove('loading');

    // Show result wrapper
    resultWrapper.classList.remove('hidden');
  }, 2000);
});

setTimeout(() => {
  displayInput(inputText);
}, 1000);

function displayInput(text) {
  new TypeIt("#opinion", {
    strings: text.trim(),
    speed: 50,
    waitUntilVisible: true,
  }).go();
}

function displayScore(scoreValue) {
  score.textContent = scoreValue;
  scorePanel.classList.add('animated', 'fadeIn');
}

function displayFeedback(feedback) {
  const feedbackDiv = document.querySelector("#feedback");
  new TypeIt("#feedback", {
    strings: feedback.trim().split('\n'),
    speed: 50,
    waitUntilVisible: true,
  }).go();
  feedbackDiv.classList.remove("hidden");
}