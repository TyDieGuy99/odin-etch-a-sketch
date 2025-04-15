const container = document.querySelector('#container');
let squares = 16;
updateGrid();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log('button pressed')
    squares = prompt('Input a number 1-100 to create your grid size.');
    updateGrid();
});

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
                } else {
                    box.style.background = 'white';
                    console.log(box.style.color);
                }     
            });
            //console.log((i + 1) * (row + 1))
        }
    }
}


