import _ from 'lodash'

const cell = () => ({
  hidden: true,
  flag: false,
  value: 0
})

const createGrid = (width, height) => new Array(width * height).fill(0).map(cell)

const STATE_IN_GAME = 'IN_GAME'
const STATE_LOST = 'LOST'
const STATE_WON = 'WIN'
export const createGame = (width, height, difficulty) => {
  return {
    state: STATE_IN_GAME,
    width,
    height,
    initialized: false,
    flagCount: 0,
    mineCount: Math.floor(difficulty * width * height),
    grid: createGrid(width, height),
    startTime: Date.now(),
    endTime: null,
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
  return surounding.filter(({ x, y }) => x >= 0 && x < width && (y >= 0 && y < height)).map(({ x, y }) => x + width * y)
}

const notInRadius = (distance, game, index) => i => {
  const x = Math.floor(index % game.width)
  const y = Math.floor(index / game.width)
  const xx = Math.floor(i % game.width)
  const yy = Math.floor(i / game.width)
  return distance < Math.sqrt(((xx - x)**2) + ((yy - y)**2))
}

const initialize = (game, index) => {
  const minesCandidates = new Array(game.width * game.height) // index candidates for mines
    .fill(0)
    .map((g, i) => i)
    .filter(i => index !== i)
    .filter(notInRadius(2, game, index))

  const mines = _.shuffle(minesCandidates).slice(0, game.mineCount)
  const grid = game.grid
    .map((cell, i) => (mines.includes(i) ? { ...cell, value: -1 } : cell)) // assign mines
    .map((cell, i) => {
      if (cell.value == -1) return cell

      const value = neighbours(game.width, game.height, i).filter(neighbour => mines.includes(neighbour)).length
      return { ...cell, value }
    })

  return { ...game, initialized: true, grid }
}

const expand = (grid, width, height, index) => {
  const cell = grid[index]

  if (cell.flag) return grid

  grid[index] = { ...cell, hidden: false }

  if (!cell.hidden) return grid
  if (cell.value !== 0) return grid // if its a bomb or a value

  grid[index] = { ...cell, hidden: false }

  const surounding = neighbours(width, height, index)
  return surounding.reduce((grid, neighbour) => expand(grid, width, height, neighbour), grid)
}

const win = grid => grid.filter(cell => cell.value !== -1).every(cell => !cell.hidden)
const lose = grid => grid.filter(cell => cell.value == -1).some(cell => !cell.hidden)
const gameState = grid => {
  if (win(grid)) return STATE_WON
  if (lose(grid)) return STATE_LOST
  return STATE_IN_GAME
}

export const sweep = (game, index) => {
  if (!game.initialized) game = initialize(game, index)
  if (game.state !== STATE_IN_GAME) return game

  const grid = expand([...game.grid], game.width, game.height, index)
  const state = gameState(grid)

  switch (state) {
    case STATE_LOST:
      return { ...game, state, grid: grid.map((cell, i) => ({ ...cell, hidden: false, value: index == i ? -2 : cell.value })), endTime: Date.now() }
    case STATE_WON:
      return { ...game, state, grid: grid.map(cell => ({ ...cell, hidden: false, flag: cell.value === -1})), endTime: Date.now()}
    default:
      return { ...game, state, grid }
  }
}

export const flag = (game, index) => {
  if (!game.grid[index].hidden) return game // you cannot flag a visible cell
  if (game.state !== STATE_IN_GAME) return game

  const flagCount = game.grid[index].flag ? game.flagCount - 1 : game.flagCount + 1
  if (flagCount > game.mineCount) return game // you cannot put more flag than there is bombs

  const grid = game.grid.map((cell, i) => (index == i ? { ...cell, flag: !cell.flag } : cell))
  return { ...game, grid, flagCount }
}
