import React from 'react'

const Cell = ({onSweep, dangerLevel, flagged, hidden}) =>
    <div className={(!hidden) ? "cell swept" : "cell"} onClick={onSweep} flag={flagged}>{(hidden) ? "" : cellValue(dangerLevel)}</div>


const cellValue = (dangerLevel) => {
    switch (-1) {
        case -1: return <img src="images/mine.jpg" alt="" />
        case 0: return ""
        default: return dangerLevel
    }
}

export default Cell
