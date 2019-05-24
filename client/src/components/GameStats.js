import React, { useState, useEffect } from 'react'

export default ({ minesLeft, resetGame, startTime, gameOn }) => {
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

  return (
    <div className="statsBar">
      <div>{elapsedTime}</div>
      <button id="coolGuy">
        <span role="img" aria-label="Cool Dude" onClick={resetGame}>
          &#x1F642;
        </span>
      </button>
      <div id="mineCount">{minesLeft}</div>
    </div>
  )
}
