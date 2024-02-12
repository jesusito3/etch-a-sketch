const container = document.querySelector('#container');

function createGrid(number) {
    for(let row = 0; row < number; row++) {
        for(let column = 0; column < number; column++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);
            cell.style.width = 960 / number + "px";
            cell.style.height = 960 / number + "px";
        }
    }
}
createGrid(16);

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const squares = document.getElementsByClassName('cell');

for (let i = 0; i < squares.length; i++) {
    squares[i].onmouseover = function () {
        squares[i].style.backgroundColor = getRandomColor();
    };
}

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let gridSize = prompt("Desired number of squares per side?");
    if (gridSize > 100) {
        alert("Please enter a number no greater than 100");
    }
    else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
        for (let i = 0; i < squares.length; i++) {
            squares[i].onmouseover = function () {
                squares[i].style.backgroundColor = getRandomColor();
            };
        }
    }
});

