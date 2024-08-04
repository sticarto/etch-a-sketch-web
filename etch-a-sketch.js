// Create 16 divs and append them to the html div
const container = document.querySelector('#container');

let gridSize = 16 * 16
for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.addEventListener('mouseover', () => {
        div.style['backgroundColor'] = 'black';
    });
    container.appendChild(div);

}
