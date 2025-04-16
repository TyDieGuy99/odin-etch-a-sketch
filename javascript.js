const container = document.querySelector('#container');
const buttons = document.querySelectorAll('#onOff');
let squares = 16;
let colorMode = 'true';
let opacityMode = 'true';
var regex = /^[0-9]+$/;

updateGrid();

// on/off button coloring
buttons.forEach((button) => {
    button.style.background = '#26FF17';
    button.style.color = '#17161D';
});

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
            //change div color on mouse enter
            box.addEventListener('mouseenter', () => {
                if (colorMode === 'true') {
                    let randomColor = Math.floor(Math.random()*16777215).toString(16);
                    while (randomColor.length < 6) { //maybe tempt solution, if string gives less than 6 characters randomize again
                        randomColor = Math.floor(Math.random()*16777215).toString(16);
                    }
                    var hexColor = '#' + randomColor;
                    box.style.background = hexColor;
                } else {
                    box.style.background = 'black';
                }
                    
                if (opacityMode === 'true') {
                    if (box.style.opacity < 1.0) {
                        let currentOpacity = box.style.opacity;
                        let newOpacity = parseFloat(currentOpacity) + 0.1;
                        box.style.opacity = newOpacity;
                    }
                } else {
                    box.style.opacity = '1.0';
                }      
            });
        }
    }
}

//call from button to create new grid
function gridBtn() {
    squares = prompt('Input a number 1-100 to create your grid size.');
    while ((squares > 100) || (squares < 1) || (!squares.match(regex))) {
        squares = prompt('Please try again. Input a number 1-100 to create your grid size.');
    }
    clearGrid();
    updateGrid();
}

//change between rainbow/black and button color
function colorBtn(button) {
    if (colorMode === 'true') {
        colorMode = 'false';
        btnColor(false, button);
    } else {
        colorMode = 'true';
        btnColor(true, button);
    }
}

//change opacity effect on/off and button color
function opacityBtn(button) {
    if (opacityMode === 'true') {
        opacityMode = 'false';
        btnColor(false, button);
    } else {
        opacityMode = 'true';
        btnColor(true, button);
    }
}

//clears current grid
function clearGrid() {
    const parent = document.getElementById('container');
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.clear();
}

//changes the button color
function btnColor(trueFalse, button) {
    if (trueFalse === true) {
        button.style.background = 'green';
    } else  if (trueFalse === false) {
        button.style.background = 'red';
    }
    
}