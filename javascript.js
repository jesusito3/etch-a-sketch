const container = document.querySelector('#container');

function createGrid(number) {
    for(let row = 0; row < number; row++) {
        for(let column = 0; column < number; column++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
        }
    }
}
createGrid(16);

const squares = document.getElementsByClassName('cell');

for (let i = 0; i < squares.length; i++) {
    squares[i].onmouseover = function () {
        squares[i].style.cssText = "background-color: blue";
    };
}