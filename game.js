// Variables to track game performance
let score = 0;
let level = 1;
let linesCleared = 0;

// Function to update the score board
function updateScoreBoard() {
  const scoreElement = document.getElementById('score');
  const levelElement = document.getElementById('level');
  const linesElement = document.getElementById('lines');

  // Update the text content of the score board elements
  scoreElement.textContent = 'Score: ' + score;
  levelElement.textContent = 'Level: ' + level;
  linesElement.textContent = 'Lines Cleared: ' + linesCleared;
}

// Example usage:
// Update the score board when the player scores points
function handleScoringPoints(points) {
  // Increase the score
  score += points;

  // Update the score board
  updateScoreBoard();
}

// Example usage:
// Update the score board when the level changes
function handleLevelChange(newLevel) {
  // Update the level
  level = newLevel;

  // Update the score board
  updateScoreBoard();
}

// Example usage:
// Update the score board when a line is cleared
function handleLineCleared() {
  // Increase the lines cleared count
  linesCleared++;

  // Update the score board
  updateScoreBoard();
}
