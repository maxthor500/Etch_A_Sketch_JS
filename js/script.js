const grid = document.getElementById('grid')

// define the grid size
const DEFAULT_SIZE = 16
let currentSize = DEFAULT_SIZE

const setSize = (newSize) => {
    currentSize = newSize
}

const renderGrid = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)
        grid.appendChild(gridElement)
    }
}

renderGrid(DEFAULT_SIZE)