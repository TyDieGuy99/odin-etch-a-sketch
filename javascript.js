const container = document.querySelector('#container');
let squares = 16;
let h = 0;
updateGrid();

//create grid of div squares
function updateGrid() {
    for (let row = 0; row < squares; row++) {
        for (let i = 0; i < squares; i++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.background = 'white';
            box.style.border = '2px solid black';
            box.style.width = '50px';
            box.style.height = '50px';
            container.appendChild(box);
            box.addEventListener('mouseenter', (e) => {
                if (box.style.background == 'white') {
                    box.style.background = 'black';
                    console.log(box.style.color);
                }     
            });
            //console.log((i + 1) * (row + 1))
            h++;
        }
    }
    console.log(h);
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