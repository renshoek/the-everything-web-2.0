const towerElement = document.querySelector('.tower');

// Get the viewport dimensions
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

// Set the initial position of the tower element
towerElement.style.top = Math.random() * viewportHeight + 'px';
towerElement.style.left = Math.random() * viewportWidth + 'px';

// Update the position of the tower element every second
setInterval(() => {
  // Generate a new random position within the bounds of the viewport
  const newTop = Math.random() * viewportHeight;
  const newLeft = Math.random() * viewportWidth;

  // Update the position of the tower element
  towerElement.style.top = newTop + 'px';
  towerElement.style.left = newLeft + 'px';
}, 1000);
