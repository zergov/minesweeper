import React, { useState, useEffect } from 'react'
import './App.css'
import GameStats from './components/GameStats'
import { createGame, sweep, flag } from './minesweeper'
import Grid from './components/Grid'
// import axios from 'axios'

function Game() {
  const [game, setGame] = useState(createGame(10, 10))
  const onSweep = index => setGame(sweep(game, index))
  const onFlag = index => setGame(flag(game, index))

  const resetGame = () => {
    setGame(createGame(10, 10))
  }

  let minesLeft = game.mineCount - game.flagCount

  return (
    <div className="App">
      <GameStats minesLeft={minesLeft} resetGame={resetGame} startTime={game.startTime} />
      <Grid onSweep={onSweep} onFlag={onFlag} grid={game.grid} />
    </div>
  )
}

export default Game
