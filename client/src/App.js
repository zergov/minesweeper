import React, { useState, useEffect } from 'react'
import './App.css'
import GameStats from './components/GameStats'
import { createGame, sweep, flag } from './minesweeper'
import Grid from './components/Grid'
import Settings from './components/Settings'
// import axios from 'axios'

function Game() {
  const [game, setGame] = useState(createGame(10, 10))
  const [size, setSize] = useState(10)
  const [difficulty, setDifficulty] = useState(0.1)
  const onSweep = index => setGame(sweep(game, index))
  const onFlag = index => setGame(flag(game, index))

  const resetGame = () => {
    setGame(createGame(10, 10))
  }

  let minesLeft = game.mineCount - game.flagCount

  return (
    <div className="App">
      <GameStats minesLeft={minesLeft} resetGame={resetGame} startTime={game.startTime} gameState={game.state} />
      <Grid onSweep={onSweep} onFlag={onFlag} grid={game.grid} />
      <Settings size={size} setSize={setSize} difficulty={difficulty} setDifficulty={setDifficulty} />
    </div>
  )
}

export default Game
