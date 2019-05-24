import React from 'react'

export default ({ grid, onSweep }) => {
  return (
      <div className="wrapper grid">
        { grid.map((cell, i) => {
          return (
            // TODO: replace this with a <Cell /> component
            <div onClick={() => onSweep(i)} key={i}>{cell.hidden ? "" : cell.value}</div>
          )
        }) }
      </div>
  )
}
