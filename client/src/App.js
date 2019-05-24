import React, { useState, useEffect } from 'react'
import './App.css'
import { createGame, sweep } from './minesweeper'
import Grid from './components/Grid'
import axios from 'axios'


function Game() {
  const [game, setGame] = useState(createGame(10, 10))
  const onSweep = index => setGame(sweep(game, index))

  return (
    <div className="App">
      <h1>make a stats component here :)</h1>
      <Grid onSweep={onSweep} grid={game.grid} />
    </div>
  )
}

export default Game
