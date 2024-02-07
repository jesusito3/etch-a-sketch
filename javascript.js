const container = document.querySelector('#container');

{
for(let row = 0; row < 16; row++) {
    for(let column = 0; column < 16; column++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}
}

const squares = document.querySelector('.cell');

for (i in squares) {
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.cssText = "background-color: blue;";
    });
}
