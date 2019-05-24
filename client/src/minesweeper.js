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
    initialized: false,
    mineCount: Math.floor((width * height) / 10),
    grid: createGrid(width, height)
  }
}

const initialize = game => {
  const mines = new Array(game.mineCount).fill(game).map(() => Math.floor(Math.random() * (game.width * game.height)))

  const grid = game.grid.map((cell, i) => (mines.includes(i) ? { ...cell, value: -1 } : cell))
  return { ...game, initialized: true, grid }
}

export const sweep = (game, index) => {
  // if the game is not initialized, generate and add mines to the grid
  if (!game.initialized) game = initialize(game)

  const grid = game.grid.map((cell, i) => (i == index ? { ...cell, hidden: false } : cell))
  return { ...game, grid }
}
