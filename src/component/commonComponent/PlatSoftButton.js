import React from 'react'

const PlatSoftButton = ({platFormLink,tryDivClass,tryBtnCLass,tryBtn,howDivCLass,howBtn}) => {
    return (
        <div className={platFormLink}>
            <div className={tryDivClass}>
                <button className={tryBtnCLass}>{tryBtn}</button>
            </div>
            <button className={howDivCLass}>{howBtn}</button>
        </div>
    )
}

export default PlatSoftButton
