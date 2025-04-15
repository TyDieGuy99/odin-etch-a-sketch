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
            box.addEventListener('mouseenter', (e) => {
                if (box.style.background == 'white') {
                    box.style.background = 'black';
                    console.log(box.style.color);
                }     
            });
            //console.log((i + 1) * (row + 1))
        }
    }
}

function gridBtn() {
    console.log('button pressed');
    squares = prompt('Input a number 1-100 to create your grid size.');
    clearGrid();
    updateGrid();
}

function clearGrid() {
    const parent = document.getElementById('container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    
}