import React from 'react'
const Cell = ({style, onSweep, onFlag, dangerLevel, flagged, hidden, index}) => {
  return (
    <div style={{...style}} className={(!hidden) ? "cell swept" : "cell"} onClick={onSweep} onContextMenu={onFlag} flag={flagged}>
      {cellValue(hidden, dangerLevel, flagged, index)}
    </div>
  )
}

const boom = new Audio('boom.mp3')

const cellValue = (hidden, dangerLevel, flagged, index) => {
  if (flagged) return <span>🚩</span>
  if (hidden) return index % 3 == 0 ? <span>&#x1F332;</span> : <span>&#x1F333;</span>
  switch (dangerLevel) {
    case -1:
      return <span>&#x1F4A3;</span>
    case -2:
      boom.play()
      return <span>💥</span>
    case 0:
      return ''
    default:
      return dangerLevel
  }
}

export default Cell
