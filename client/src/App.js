import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './App.css'
import GameStats from './components/GameStats'
import { createGame, sweep, flag } from './minesweeper'
import Grid from './components/Grid'
import Settings from './components/Settings'
// import axios from 'axios'

function Game() {
  const [username, setUsername] = useState("")
  const [scoreboard, setScoreboard] = useState([])
  const [game, setGame] = useState(createGame(10, 10, 0.1))
  const [size, setSize] = useState(10)
  const [difficulty, setDifficulty] = useState(0.1)
  const [theme, setTheme] = useState('')
  const onSweep = index => setGame(sweep(game, index))
  const onFlag = index => setGame(flag(game, index))

  useEffect(() => { fetchScoreboard() }, [])

  const fetchScoreboard = async () => {
    const response = await fetch('http://localhost:4201/api/scoreboard')
    const scoreboard = await response.json()
    setScoreboard(scoreboard)
  }

  const pushResults = async () => {
    const response = await fetch('http://localhost:4201/api/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...game, username: username}),
    })
  }

  const onWin = async () => {
    pushResults(game)
  }

  const resetGame = () => setGame(createGame(size, size, difficulty))
  let minesLeft = game.mineCount - game.flagCount

  return (
    <div className={'App ' + theme}>
      <Settings setSize={setSize} setDifficulty={setDifficulty} setTheme={setTheme} onUsernameChange={setUsername} />
      <GameStats onWin={onWin} minesLeft={minesLeft} resetGame={resetGame} startTime={game.startTime} gameState={game.state} />
      <div style={{ display: 'flex'}}>
        <Grid onSweep={onSweep} onFlag={onFlag} grid={game.grid} />
        <div style={{ marginLeft: 24 }}>
          <h1>Latest Submission</h1>
          <ul>
            { scoreboard.reverse().map(game => <li><strong>{game.username || "anonymous"} | </strong>{`${game.width} x ${game.height} | mine: ${game.mineCount}`}</li>) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Game
