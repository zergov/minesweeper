import React from 'react'
import Timer from './Timer'

export default ({ mineCount, resetGame }) => {
  return (
    <div className="statsBar">
      <button id="coolGuy">
        <span alt="A Cool Guy" onClick={resetGame}>
          SMILE
        </span>
      </button>
      <div id="mineCount">{mineCount}</div>
    </div>
  )
}
