import React from 'react'
import Cell from './Cell'

export default ({ grid, onSweep, onFlag }) => {
  return (
      <div className="wrapper grid">
        { grid.map((cell, i) => {
          return (
            <Cell
              onSweep={() => onSweep(i)}
              onFlag={e => {
                e.preventDefault()
                onFlag(i)
              }}
              key={i}
              index={i}
              dangerLevel={cell.value}
              flagged={cell.flag}
              hidden={cell.hidden}
            />
          )
        }) }
      </div>
  )
}
