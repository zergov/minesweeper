import React from 'react'
import Cell from './Cell'

export default ({ grid, onSweep }) => {
  return (
      <div className="wrapper grid">
        { grid.map((cell, i) => {
          return (
            <Cell onSweep={() => onSweep(i)} key={i} dangerLevel={0} flag={false} hidden={cell.hidden} />
          )
        }) }
      </div>
  )
}
