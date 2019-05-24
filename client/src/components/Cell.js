import React from 'react'

const Cell = ({onSweep, dangerLevel, flagged, hidden}) =>
    <div className="cell" onClick={onSweep} flag={flagged}>{(hidden) ? "" : dangerLevel}</div>

export default Cell