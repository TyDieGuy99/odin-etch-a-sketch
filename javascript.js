const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

for (let i = 0; i < 16; i++) {
    const boxi =document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);

    console.log(i + 1);
}