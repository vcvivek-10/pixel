import React from 'react'

const RoadMapStatus = ({divClass,statusBlinkDiv,statusSpan,statusTitle}) => {
    return (
        <div className={divClass}>
            <div className={statusBlinkDiv}></div>
            <span className={statusSpan}>{statusTitle}</span>
        </div>
    )
}

export default RoadMapStatus
