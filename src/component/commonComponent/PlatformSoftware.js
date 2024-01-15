import React from 'react'

const PlatformSoftware = (props) => {
    const {titleDivClass,firstTitleClass,firstTitle,secondTitleClass,secondTitle,descriptionClass,description} = props
    return (
        <div>
            <div className={titleDivClass}>
                <span className={firstTitleClass}>
                    {firstTitle}
                </span>
                <span className={secondTitleClass}>
                    {secondTitle}
                </span>
            </div>
            <div className={descriptionClass}>
               {description}
            </div>
        </div>
    )
}

export default PlatformSoftware
