const whites = ['r','e','n','s','h','o','e'];
const blacks = ['k','s','t','r','a'];
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

let playNote = (key) => {
  const noteSound = document.getElementById(key.dataset.note);
  noteSound.currentTime = 0;
 noteSound.play();
  key.classList.add('active');
  noteSound.addEventListener('ended', () => {
    key.classList.remove('active');
  })
};

document.addEventListener('keydown', (e) => {
  if(e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whites.indexOf(key);
  const blackKeyIndex = blacks.indexOf(key);
  
  if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
})