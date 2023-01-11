let COEFFICIENT = 9;
let BOMBS = 35;
let clickCounter = 7;

const configuration  = {
  easy: {
    coefficient: 9,
    bombs: 10,
  },
  intermediate: {
    coefficient: 16,
    bombs: 40,
  },
  advanced: {
    coefficient: 24,
    bombs: 99,
  }
}

const generateBombList = () => {
  const set = new Set();
  while(set.size < BOMBS) {
    set.add(Math.floor(Math.random() * Math.floor(COEFFICIENT * COEFFICIENT)));
  }
  return set;
}

const getNeighbours = (pos) => {
  const row = Math.floor(pos / COEFFICIENT)
  const col = pos % COEFFICIENT
  const neighbours = [];
  // left
  if (col > 0) { 
    neighbours.push(pos - 1);
    neighbours.push(pos - 1 + COEFFICIENT);
    neighbours.push(pos - 1 - COEFFICIENT);
  }
  // right
  if (col < (COEFFICIENT - 1)) { 
    neighbours.push(pos + 1);
    neighbours.push(pos + 1 + COEFFICIENT);
    neighbours.push(pos + 1 - COEFFICIENT);

  }
  // top
  if (row > 0) { neighbours.push(pos - COEFFICIENT) }
  // bottom
  if (row < COEFFICIENT - 1) { neighbours.push(pos + COEFFICIENT) }
  return neighbours.filter(v => v >= 0);
}

const onClick = (e) => {
  ++clickCounter;
  document.getElementById('click-counter').innerHTML = clickCounter;
  const target = e.target
  let neighbours;
  if(target.dataset.bomb == "true") {
    document.getElementById("grid-container").classList.add('lost');
  }
  else {
    target.classList.add('clicked');
  }
}

// draw board
const drawBoard = () => {
  const container = document.getElementById("grid-container");  
  let cell, neighbours, number;
  const bombList = generateBombList();
  for(let i = 0; i < COEFFICIENT * COEFFICIENT; i++) {
    cell = document.createElement('div');
    cell.id = `pos_${i}`;
    cell.setAttribute('data-position', i);
    cell.setAttribute('data-row', Math.floor(i / COEFFICIENT));
    cell.setAttribute('data-bomb', bombList.has(i));
    cell.setAttribute('data-column', i % COEFFICIENT);
    cell.classList.add('grid-element');
    cell.onclick = onClick
    if(!bombList.has(i)) {
      neighbours = getNeighbours(i)
      number = neighbours.reduce((bombs, n) => (bombList.has(n) ? bombs + 1 : bombs), 0)
      cell.setAttribute('data-number', number);
      cell.innerHTML = `<p>${number}</p>`;
    }
    container.appendChild(cell);
  }
}

const reset = () => {
  const container = document.getElementById("grid-container");
  container.innerHTML = '';
  container.classList.remove('lost');
  clickCounter = 0
  document.getElementById('click-counter').innerHTML = 0
}

const onClickResetButton = () => {
  reset();
  drawBoard()
}

const changeLevel = (level) => {
  COEFFICIENT = configuration[level].coefficient;
  BOMBS = configuration[level].bombs;
}

(() => { 
  drawBoard();
  document.getElementById('reset-button').onclick = onClickResetButton
})()