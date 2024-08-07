// Create 16 divs and append them to the html div
const container = document.querySelector('#container');

// Turn this into a function that creates a new grid based on
// the given size
function createGrid (gridSize) {
    if (gridSize > 100) return;

    let newGridSize = gridSize * gridSize;
    container.style.width = (gridSize * 16) + 'px';

    // This will clear all elements inside the container if it has any
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }

    for (let i = 0; i < newGridSize; i++) {
        const div = document.createElement("div");
        div.addEventListener('mouseover', () => {
            div.style['backgroundColor'] = 'black';
        });
        container.appendChild(div);
    
    }
}

// let gridSize = 16 * 16;
// for (let i = 0; i < gridSize; i++) {
//     const div = document.createElement("div");
//     div.addEventListener('mouseover', () => {
//         div.style['backgroundColor'] = 'black';
//     });
//     container.appendChild(div);

// }

function setGridSize () {
    newSize = prompt('Enter a width and height (max 100)');
    createGrid(newSize);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
    setGridSize();
})

createGrid(16);