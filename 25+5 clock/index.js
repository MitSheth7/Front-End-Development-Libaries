const breakDecrement = document.getElementById('break-decrement');
const breakIncrement = document.getElementById('break-increment');
const breakLength = document.getElementById('break-length');
const sessionDecrement = document.getElementById('session-decrement');
const sessionIncrement = document.getElementById('session-increment');
const sessionLength = document.getElementById('session-length');
const timerLabel = document.getElementById('timer-label');
const timeLeft = document.getElementById('time-left');
const startStop = document.getElementById('start_stop');
const reset = document.getElementById('reset');
const beep = document.getElementById('beep');

let breakLengthValue = 5;
let sessionLengthValue = 25;
let timeLeftValue = sessionLengthValue * 60;
let isRunning = false;
let timerInterval;

function updateBreakLength(value) {
  breakLengthValue = value;
  breakLength.textContent = value;
}

function updateSessionLength(value) {
  sessionLengthValue = value;
  sessionLength.textContent = value;
  timeLeftValue = value * 60;
  updateTimerDisplay();
}

function startTimer() {
  isRunning = true;
  startStop.textContent = 'Pause';
  timerInterval = setInterval(() => {
    timeLeftValue--;
    updateTimerDisplay();
    if (timeLeftValue === 0) {
      beep.play();
      if (timerLabel.textContent === 'Session') {
        timerLabel.textContent = 'Break';
        timeLeftValue = breakLengthValue * 60;
      } else {
        timerLabel.textContent = 'Session';
        timeLeftValue = sessionLengthValue * 60;
      }
    }
  }, 1000);
}

function pauseTimer() {
  isRunning = false;
  startStop.textContent = 'Start';
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  timerLabel.textContent = 'Session';
  updateSessionLength(25);
  updateBreakLength(5);
  beep.pause();
  beep.currentTime = 0;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeftValue / 60).toString().padStart(2, '0');
  const seconds = (timeLeftValue % 60).toString().padStart(2, '0');
  timeLeft.textContent = `${minutes}:${seconds}`;
}

breakDecrement.addEventListener('click', () => {
  if (breakLengthValue > 1 && !isRunning) {
    updateBreakLength(breakLengthValue - 1);
  }
});

breakIncrement.addEventListener('click', () => {
  if (breakLengthValue < 60 && !isRunning) {
    updateBreakLength(breakLengthValue + 1);
  }
});

sessionDecrement.addEventListener('click', () => {
  if (sessionLengthValue > 1 && !isRunning) {
    updateSessionLength(sessionLengthValue - 1);
  }
});

sessionIncrement.addEventListener('click', () => {
  if (sessionLengthValue < 60 && !isRunning) {
    updateSessionLength(sessionLengthValue + 1);
  }
});

startStop.addEventListener('click', () => {
  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
});

reset.addEventListener('click', resetTimer);
