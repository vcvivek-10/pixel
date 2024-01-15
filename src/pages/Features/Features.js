import React, { useEffect, useRef, useState } from 'react'
import "./features.css"
import Blank from '../../component/svg/Blank'
import { featrues } from '../../utils/platformInfo'
import { motion, useInView, useAnimation } from "framer-motion"

const Features = () => {
    const [active, setActive] = useState(featrues[0]?.featureTitle)
    const [image, setImage] = useState(featrues[0]?.img)
    // console.log(image);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        // console.log(isInView);
        if (isInView) {
            mainControls.start("visible")
        }

    }, [isInView])

    return (
        <div className='main_flex'>
            <div className='main_container'>
                <div ref={ref} className='features_container'>
                    <motion.div className="feature_main"
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        <div className="feature_blank">
                            <div></div>
                            <Blank />
                        </div>
                        <div className="feature_content">
                            <div className="feature_topFlex">
                                <h1>Use all the benefits of NFD</h1>
                                <span>Unlock the next level of control with customizable real-time feeds, charts, watchlists, and alerts with NFD.gg</span>
                            </div>
                            <div className="feature_bottomFlex">
                                <div className="feature_bottomLeftFlex">
                                    {
                                        featrues?.map((data, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={`${data.featureBtnDivClass} ${active === data.featureTitle && "activeBg"}`}
                                                    onClick={() => {
                                                        setActive(data.featureTitle)
                                                        setImage(data.img)
                                                    }
                                                    }
                                                >
                                                    <span
                                                        className={`${data.featuresTitleClass}`}>
                                                        {data.featureTitle}
                                                    </span>
                                                    <span
                                                        className={`${data.featureDescClass} ${active === data.featureTitle ? "block" : "none"}`}>
                                                        {data.desTitle}
                                                    </span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="feature_bottomRightFlex">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className="feature_bottomOverlay">
                                <div></div>
                                <Blank />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Features
