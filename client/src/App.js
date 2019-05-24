import React, { useState, useEffect } from 'react'
import './App.css'
import GameStats from './components/GameStats'
import { createGame, sweep } from './minesweeper'
import Grid from './components/Grid'
// import axios from 'axios'

function Game() {
  const [game, setGame] = useState(createGame(10, 10))
  const onSweep = index => setGame(sweep(game, index))

  const resetGame = () => {
    setGame(createGame(10, 10))
  }

  return (
    <div className="App">
      <GameStats mineCount={game.mineCount} resetGame={resetGame} startTime={game.startTime} gameOn={true} />
      <Grid onSweep={onSweep} grid={game.grid} />
    </div>
  )
}

export default Game