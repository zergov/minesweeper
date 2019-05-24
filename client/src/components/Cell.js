import React from 'react'

const Cell = ({onSweep, dangerLevel, flagged, hidden}) =>
    <div className={(!hidden) ? "cell swept" : "cell"} onClick={onSweep} flag={flagged}>{(hidden) ? "" : cellValue(dangerLevel)}</div>


const cellValue = (dangerLevel) => {
    switch (dangerLevel) {
        case -1: return "M"
        case 0: return ""
        default: return dangerLevel
    }
}

export default Cell