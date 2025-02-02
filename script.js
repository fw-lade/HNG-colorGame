const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorOptions = document.querySelector('[data-testid="colorOptions"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreElement = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let targetColor;
let score = 0;

// Predefined set of colors
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
];

// Function to generate a random color from the predefined set
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to initialize the game
function initializeGame() {
  targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;
  gameStatus.textContent = "";
  renderColorOptions();
}

// Function to render color options
function renderColorOptions() {
  colorOptions.innerHTML = "";
  const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
  shuffledColors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => handleGuess(color));
    colorOptions.appendChild(button);
  });
}

// Function to handle user's guess
function handleGuess(guess) {
  if (guess === targetColor) {
    gameStatus.textContent = "Correct!";
    gameStatus.classList.add("correct");
    score++;
    scoreElement.textContent = score;
    setTimeout(() => {
      initializeGame();
    }, 1000);
  } else {
    gameStatus.textContent = "Wrong! Try again.";
    gameStatus.classList.add("wrong");
  }
  setTimeout(() => {
    gameStatus.classList.remove("correct", "wrong");
  }, 1000);
}

// Event listener for the new game button
newGameButton.addEventListener("click", () => {
  score = 0;
  scoreElement.textContent = score;
  initializeGame();
});

// Initialize the game on page load
initializeGame();
