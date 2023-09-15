const button = document.getElementById('game-button');
const container = document.querySelector('.container');

// Function to generate random positions for the button
function getRandomPosition() {
   const maxWidth = container.clientWidth - button.clientWidth;
   const maxHeight = container.clientHeight - button.clientHeight;
   const randomX = Math.floor(Math.random() * maxWidth);
   const randomY = Math.floor(Math.random() * maxHeight);
   return { x: randomX, y: randomY };
}

// Function to move the button to a random position
function moveButton() {
   const newPosition = getRandomPosition();
   button.style.left = `${newPosition.x}px`;
   button.style.top = `${newPosition.y}px`;
}

// Add a click event listener to the button
button.addEventListener('click', () => {
   alert('Congratulations! You pressed the button!');
   moveButton(); // Move the button to a new random position
});

// Add a mouseenter event listener to the button
button.addEventListener('mouseenter', () => {
   moveButton(); // Move the button to a new random position when the cursor enters
});

// Initialize the game by moving the button to a random position
moveButton();


