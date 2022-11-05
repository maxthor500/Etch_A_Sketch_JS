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
}



renderGrid(DEFAULT_SIZE)