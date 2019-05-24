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
    mineCount: 10,
    grid: createGrid(width, height),
    startTime: Date.now()
  }
}

const neighbours = (width, height, index) => {
  const x = Math.floor(index % width)
  const y = Math.floor(index / width)
  const surounding = [
    { x: x + 1, y },
    { x: x - 1, y },
    { x, y: y + 1 },
    { x, y: y - 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y - 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y: y - 1 }
  ]
  return surounding
    .filter(({x, y}) => (x >= 0 && x < width) && (y >= 0 && y < height))
    .map(({x, y}) => x + width * y)
}

const initialize = game => {
  const mines = new Array(game.mineCount)
    .fill(game)
    .map(() => Math.floor(Math.random() * (game.width * game.height)))
  const grid = game.grid
    .map((cell, i) => (mines.includes(i) ? { ...cell, value: -1 } : cell)) // assign mines
    .map((cell, i) => {
      if (cell.value == -1) return cell

      const value = neighbours(game.width, game.height, i).filter(neighbour => mines.includes(neighbour)).length
      return {...cell, value}
    })

  return { ...game, initialized: true, grid }
}

const expand = (grid, width, height, index) => {
  const cell = grid[index]
  grid[index] = {...cell, hidden: false}

  if (cell.value !== 0) return grid // if its a bomb or a value
  if (!cell.hidden) return grid // if its a bomb or a value

  grid[index] = {...cell, hidden: false}

  const surounding = neighbours(width, height, index)
  return surounding.reduce((grid, neighbour) => expand(grid, width, height, neighbour), grid)
}

export const sweep = (game, index) => {
  if (!game.initialized) game = initialize(game)

  return {
    ...game,
    grid: expand([...game.grid], game.width, game.height, index)
  }
}
