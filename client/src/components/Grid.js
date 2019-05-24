import React from 'react'
import Cell from './Cell'

export default ({ grid, onSweep, onFlag }) => {
  const width = 800;
  const cellSize = width / Math.floor(Math.sqrt(grid.length))
  const cellStyle = {
    flex: `1 1 ${cellSize}px`,
    height: cellSize,
    width: cellSize,
    fontSize: '1em',
  }

  return (
      <div style={{ width }} className="wrapper grid">
        { grid.map((cell, i) => {
          return (
            <Cell
              style={cellStyle}
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
