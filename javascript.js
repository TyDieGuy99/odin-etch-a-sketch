const container = document.querySelector('#container');
let squares = 16;
var regex = /^[0-9]+$/;
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
            box.style.opacity = '0.0';
            container.appendChild(box);
            box.addEventListener('mouseenter', () => {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    console.log('this is the random color: ' + randomColor);
                    while (randomColor.length < 6) { //maybe tempt solution if string gives less than 6 characters randomize again
                        randomColor = Math.floor(Math.random()*16777215).toString(16);
                    }
                    var hexColor = '#' + randomColor;
                    console.log(hexColor);
                    box.style.background = hexColor;
                    console.log('this is what shows: ' + box.style.background);
                    
                    if (box.style.opacity < 1.0) {
                        let currentOpacity = box.style.opacity;
                        //console.log('this is the current ' + currentOpacity);
                        let newOpacity = parseFloat(currentOpacity) + 0.1;
                        //console.log('this is the new ' + newOpacity);
                        box.style.opacity = newOpacity;
                    }
                    //console.log('this is what is being shown ' + box.style.opacity);
                    
            });
            //console.log((i + 1) * (row + 1))
        }
    }
}

//call from button to create new grid
function gridBtn() {
    console.log('button pressed');
    squares = prompt('Input a number 1-100 to create your grid size.');
    while ((squares > 100) || (squares < 1) || (!squares.match(regex))) {
        squares = prompt('Please try again. Input a number 1-100 to create your grid size.');
    }
    clearGrid();
    updateGrid();
}

//clears current grid
function clearGrid() {
    const parent = document.getElementById('container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.clear();
}