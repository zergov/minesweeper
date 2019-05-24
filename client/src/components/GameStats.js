import React from 'react'
import Timer from './Timer'

export default ({ mineCount, startTime, resetGame }) => {
  const faceFile = './media/coolGuySmile.png'

  return (
    <div className="statsBar">
      <Timer startTime={startTime} />
      <button id="coolGuy">
        <img src={faceFile} alt="A Cool Guy" onClick={resetGame} />
      </button>
      <div id="mineCount">{mineCount}</div>
    </div>
  )
}
