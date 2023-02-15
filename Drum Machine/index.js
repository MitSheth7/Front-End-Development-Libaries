const drumPads = document.querySelectorAll('.drum-pad');

drumPads.forEach((drumPad) => {
  drumPad.addEventListener('click', () => {
    playSound(drumPad);
  });
});

document.addEventListener('keydown', (event) => {
  const pressedKey = event.key.toUpperCase();
  const drumPad = document.getElementById(pressedKey);

  if (drumPad) {
    playSound(drumPad);
  }
});

function playSound(drumPad) {
  const sound = drumPad.querySelector('audio');
  const display = document.getElementById('display');

  sound.currentTime = 0;
  sound.play();
  display.innerText = drumPad.id;
}
