const container = document.querySelector('#container');
let squares = 16;
updateGrid();

//create grid of div squares
function updateGrid() {
    boxSize = (800/squares) + 'px';
    for (let row = 0; row < squares; row++) {
        for (let i = 0; i < squares; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.background = 'white';
            box.style.width = boxSize;
            box.style.height = boxSize;
            container.appendChild(box);
            box.addEventListener('mouseenter', () => {
                    var randomColor = Math.floor(Math.random()*16777215).toString(16);
                    var hexColor = '#' + randomColor
                    box.style.background = hexColor;
                    box.style.opacity = '0.10';
                    console.log(box.style.background);
            });
            //console.log((i + 1) * (row + 1))
        }
    }
}

//call from button to create new grid
function gridBtn() {
    console.log('button pressed');
    squares = prompt('Input a number 1-100 to create your grid size.');
    clearGrid();
    updateGrid();
}

//clears current grid
function clearGrid() {
    const parent = document.getElementById('container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}