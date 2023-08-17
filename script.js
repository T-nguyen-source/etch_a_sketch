window.onload = function() { 
    // Draw the initial 16x16 grid
    drawGrid(16);
}

function drawGrid(size) {
    const container = document.getElementById('container');

    // Reset the container
    container.innerHTML = '';

    // Calculate the size of each square
    const squareSize = 960 / size; // 960px is the width of our container

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover listener
        square.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });

        container.appendChild(square);
    }
}

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
