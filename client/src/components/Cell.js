import React from 'react'
const Cell = ({onSweep, dangerLevel, flagged, hidden, index}) =>
    <div className={(!hidden) ? "cell swept" : "cell"} onClick={onSweep} flag={flagged}>{cellValue(hidden, dangerLevel, flagged, index)}</div>


const cellValue = (hidden, dangerLevel, flagged, index) => {
    if (flagged) return <span>&#x1F3F4;&#x200D;&#x2620;&#xFE0F;</span>
    if (hidden) return (index % 3 == 0) ? <span>&#x1F332;</span> : <span>&#x1F333;</span>
    switch (dangerLevel) {
        case -1: return <span>&#x1F4A3;</span>
        case 0: return ""
        default: return dangerLevel
    }
}

export default Cell
