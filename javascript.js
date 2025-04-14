const container = document.querySelector('#container');

for (let row = 0; row < 16; row++) {
    for (let i = 0; i < 16; i++) {
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
        console.log((i + 1) * (row + 1))
    }
}