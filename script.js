// Function to draw the grid based on the given size
function drawGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    const squareSize = 960 / size; // 960px is the width of our container

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.dataset.interactions = '0'; // Data attribute to track interactions

        // Add hover listener
        square.addEventListener('mouseover', changeColor);
        
        container.appendChild(square);
    }
}

// Function to change color and darken progressively
function changeColor() {
    // Retrieve the number of interactions with this square
    let interactions = parseInt(this.dataset.interactions);

    // Generate random RGB values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Compute the darkening effect. 10% per interaction, up to 100%
    let darkeningEffect = Math.min(interactions * 10, 100);
    
    // Apply darkening effect to RGB values
    red = Math.floor(red * (1 - darkeningEffect / 100));
    green = Math.floor(green * (1 - darkeningEffect / 100));
    blue = Math.floor(blue * (1 - darkeningEffect / 100));

    // Set the new color of the square
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    // Increment the interactions count for this square
    this.dataset.interactions = interactions + 1;
}

// Function to clear the grid
function clearGrid() {
    const container = document.getElementById('container');
    
    // Convert live HTMLCollection to a static array
    const squares = Array.from(container.getElementsByClassName('square'));

    // Iterate over each square and reset its properties
    for (let square of squares) {
        square.style.backgroundColor = '';
        square.dataset.interactions = '0';
    }
}

// Function to create a new grid based on user input
function newGrid() {
    let size = prompt("Enter the number of squares per side:", "16");

    // Validate the input
    size = parseInt(size);
    if (isNaN(size) || size <= 0 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    drawGrid(size);
}

// Draw the initial 16x16 grid when the page loads
window.onload = function() { 
    drawGrid(16);
}