import React, { useState, useEffect } from 'react'
const dananananaaaanaaaaananana = new Audio('win.mp3')

export default ({ minesLeft, resetGame, startTime, gameState, onWin }) => {
  const [elapsedTime, setElapsedTime] = useState('00:00')

  const checkState = state => {
    switch (state) {
      case 'WIN':
        onWin()
        dananananaaaanaaaaananana.play()
        return '😎'
      case 'LOST':
        return '😵'
      default:
        return '🙂'
    }
  }

  const coolGuy = checkState(gameState)

  const msToTime = duration => {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return minutes + ':' + seconds
  }

  useEffect(() => {
    const interval =
      gameState === 'IN_GAME'
        ? setInterval(() => {
            setElapsedTime(msToTime(Date.now() - startTime))
          }, 1000)
        : ''
    return () => clearInterval(interval)
  })

  return (
    <div id="statsBar" style={{ marginRight: 400 }}>
      <div id="timer">{elapsedTime}</div>
      <div id="coolGuy">
        <span onClick={resetGame}>{coolGuy}</span>
      </div>
      <div id="mineCount">{minesLeft}</div>
    </div>
  )
}
