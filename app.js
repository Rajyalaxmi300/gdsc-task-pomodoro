document.addEventListener("DOMContentLoaded", function() {
  // DOM elements
  const timerDisplay = document.querySelector('.timer');
  const startButton = document.querySelector('.buttons button:nth-of-type(1)');
  const pauseButton = document.querySelector('.buttons button:nth-of-type(2)');
  const resetButton = document.querySelector('.buttons button:nth-of-type(3)');
  const sessionsDisplay = document.querySelector('.sessions');

  // Initial values
  let totalTime = 1500; // 25 minutes in seconds
  let sessionsCompleted = 0;
  let timerInterval;

  // Function to update timer display
  function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${remainingSeconds}`;
  }

  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      totalTime--;
      updateTimerDisplay(totalTime);
      if (totalTime <= 0) {
        clearInterval(timerInterval);
        sessionsCompleted++;
        sessionsDisplay.textContent = `Completed Sessions: ${sessionsCompleted}`;
        totalTime = 1500; // Reset to 25 minutes
        updateTimerDisplay(totalTime);
      }
    }, 1000);
    startButton.disabled = true;
  }

  // Function to pause the timer
  function pauseTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
  }

  // Function to reset the timer
  function resetTimer() {
    clearInterval(timerInterval);
    totalTime = 1500; // Reset to 25 minutes
    updateTimerDisplay(totalTime);
    startButton.disabled = false;
  }

  // Event listeners
  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);

  // Initial display
  updateTimerDisplay(totalTime);
});
