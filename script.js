// get content-body
const contentBody = document.querySelector('.content-body');

// get button-set-scale
const buttonSetScale = document.querySelector('.button-set-scale');

// get button-clear-tiles
const buttonClearTiles = document.querySelector('.button-clear-tiles');

// get button-rgb-mode
const buttonRgb = document.querySelector('.button-rgb-mode');

// color setting
let color = 'white';

// generate grid function
function generateGrid (s) {
    const gridSpace = document.createElement('div');
    gridSpace.classList.add('grid-space');
    // height generation
    for (let genHeight = 0; genHeight < s; genHeight++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        // width and tile generation
        for (let genWidth = 0; genWidth < s; genWidth++) {
            const tile = document.createElement('div');
            tile.classList.add('grid-tile');
            // tile color functionality
            tile.addEventListener('mouseover', function() {
                tile.style.backgroundColor = color;
                tile.style.border = 'solid '+ color +' 1px';
            });
            gridRow.appendChild(tile);
        }
        gridSpace.appendChild(gridRow);
    }
    contentBody.appendChild(gridSpace);
}

// initial 16x16 grid generation on start
generateGrid(16);

// buttonSetScale function
buttonSetScale.addEventListener('click', function() {
    document.querySelector('.grid-space').remove();
    generateGrid(prompt('Enter grid scale:'));
})

// buttonClearTiles function
buttonClearTiles.addEventListener('click', function() {
    const tiles = document.querySelectorAll('.grid-tile');
    for (let x = 0; x < tiles.length; x++) {
        tiles[x].style.backgroundColor = 'black';
        tiles[x].style.border = 'solid rgb(40, 40, 40) 1px';
    }
})

// buttonRgb function
buttonRgb.addEventListener('click', () => {
    let funcRollRGB = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return 'rgb('+ r + ', ' + g + ', ' + b + ')';
    }
    const tiles = document.querySelectorAll('.grid-tile');
    for (let x = 0; x < tiles.length; x++) {
        const colorRandom = funcRollRGB();
        tiles[x].style.backgroundColor = colorRandom;
        tiles[x].style.border = 'solid ' + colorRandom + ' 1px';
    }
})