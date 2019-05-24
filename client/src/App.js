import React, { useState, useEffect } from 'react'
import './App.css'
import GameStats from './components/GameStats'
import Grid from './components/Grid'
import axios from 'axios'

const cell = () => ({ hidden: true, flag: false, value: 0 })
const createGrid = (width, height) => new Array(width * height).fill(0).map(() => cell())

function Game() {
  const width = 10
  const height = 10
  const [grid, setGrid] = useState(createGrid(width, height))

  const onSweep = index => {
    const x = index % width
    const y = Math.floor(index / width)

    // update the grid
    grid[index].hidden = false
    setGrid([...grid])

    console.log(`clicked on cell (${x}, ${y})`, grid[index])
  }

  return (
    <div className="App">
      <GameStats />
      <Grid onSweep={onSweep} grid={grid} />
    </div>
  )
}

export default Game
