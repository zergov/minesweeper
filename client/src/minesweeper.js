const cell = () => ({
  hidden: true,
  flag: false,
  value: 0
})

const createGrid = (width, height) => new Array(width * height).fill(0).map(cell)

export const createGame = (width, height) => {
  return {
    width,
    height,
    grid: createGrid(width, height)
  }
}

export const sweep = (game, index) => {
  const x = index % game.width
  const y = Math.floor(index / game.width)
  const grid = [...game.grid]
  const cell = grid[index]

  console.log(`clicked on cell (${x}, ${y})`, cell)
  grid[index] = { ...cell, hidden: false }

  return { ...game, grid }
}
