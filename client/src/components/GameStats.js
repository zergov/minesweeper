import React, { useState } from 'react'

export default ({ mineCount, resetGame, startTime, gameOn }) => {
  const [elapsedTime, setElapsedTime] = useState('00:00')

  const msToTime = duration => {
    let seconds = Math.floor((duration / 1000) % 60)
    let minutes = Math.floor((duration / (1000 * 60)) % 60)
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    return minutes + ':' + seconds
  }

  setInterval(() => {
    setElapsedTime(msToTime(Date.now() - startTime))
  }, 1000)

  return (
    <div className="statsBar">
      <span>{elapsedTime}</span>
      <button id="coolGuy">
        <span role="img" aria-label="Cool Dude" onClick={resetGame}>
          &#x1F642;
        </span>
      </button>
      <div id="mineCount">{mineCount}</div>
    </div>
  )
}
