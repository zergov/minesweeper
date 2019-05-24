import React, { useState } from 'react'

export default ({ mineCount, resetGame, startTime }) => {
  const [elapsedTime, setElapsedTime] = useState(startTime)

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
        <span role="img" ariaLabel="Cool Dude" onClick={resetGame}>
          &#x1F642;
        </span>
      </button>
      <div id="mineCount">{mineCount}</div>
    </div>
  )
}
