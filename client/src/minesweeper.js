const cell = () => ({
  hidden: true,
  flag: false,
  value: 0,
})

const createGrid = (width, height) => new Array(width * height) .fill(0) .map(cell)

export const createGame = (width, height) => {
  return ({
    width,
    height,
    initialized: false,
    mineCount: 60,
    grid: createGrid(width, height),
  })
}

const neighbours = (game, index) => {
  const x = Math.floor(index % game.width)
  const y = Math.floor(index / game.width)
  const surounding = [
    {x: x+1, y}, {x: x-1, y},
    {x, y: y+1}, {x, y: y-1},
    {x: x+1, y: y+1}, {x: x-1, y: y-1},
    {x: x-1, y: y+1}, {x: x+1, y: y-1},
  ]
  return surounding.map(({x, y}) => x + game.width * y)
}

const initialize = game => {
  const mines = new Array(game.mineCount)
    .fill(game)
    .map(() => Math.floor(Math.random() * (game.width * game.height)))

  const grid = game.grid
    .map((cell, i) => mines.includes(i) ? { ...cell, value: -1} : cell) // assign mines
    .map((cell, i) => {
      if (cell.value == -1) return cell

      const surounding = neighbours(game, i).filter(i => i < game.grid.length && i >= 0)
      const value = surounding.filter(neighbour => mines.includes(neighbour))
      return {...cell, value: value.length}
    })

  return {...game, initialized: true, grid}
}

export const sweep = (game, index) => {
  // if the game is not initialized, generate and add mines to the grid
  if (!game.initialized) game = initialize(game)

  const grid = game.grid.map((cell, i) => i == index ? {...cell, hidden: false} : cell)
  return {...game, grid}
}
