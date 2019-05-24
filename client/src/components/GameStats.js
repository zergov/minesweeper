import React, { useState, useEffect } from 'react'

export default ({ minesLeft, resetGame, startTime, gameState }) => {
  const [elapsedTime, setElapsedTime] = useState('00:00')

  const msToTime = duration => {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return minutes + ':' + seconds
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(msToTime(Date.now() - startTime))
    }, 1000)

    return () => clearInterval(interval)
  })

  let coolGuy = gameState === 'won' ? +'😎' : '🙂'

  return (
    <div id="statsBar">
      <div id="timer">{elapsedTime}</div>
      <div id="coolGuy">
        <span onClick={resetGame}>{coolGuy}</span>
      </div>
      <div id="mineCount">{minesLeft}</div>
    </div>
  )
}
