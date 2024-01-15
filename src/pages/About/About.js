import React, { useEffect, useRef } from 'react'
import "./about.css"
import img from "../../img/block.webp"
import OverlapAbout from '../../component/svg/OverlapAbout'
import Blank from '../../component/svg/Blank'
import { motion, useInView, useAnimation } from "framer-motion"

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(() => {
        // console.log(isInView);
        if(isInView) mainControls.start("visible")

    }, [isInView])

    return (
        <div className='main_flex'>
            <div ref={ref} className='main_container'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className='main_container position-relative' style={{ padding: "170px 0" }}>
                    <div className='about_flex'>
                        <div className="about_left">
                            <h2>The first web3 crypto platform</h2>
                            <h2>Problem</h2>
                            <p>Today, even in alpha communities, there's an enormous volume of information that members have to wade through for 6-8+ hours a day. Cutting through the noise of spam is a real problem even where there's something genuinely worth knowing.</p>
                        </div>
                        <div className='about_right'>
                            <video muted="" preload="preload">
                                <source src="https://www.nfd.gg/outtest_f19ifs.webm" type="video/webm" />
                            </video>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='overlap_leftDiv' style={{ marginTop: "110px", position: "relative", zIndex: "5" }}>
                        <div className="overlap_leftFlex">
                            <h2>We work to make your life easier</h2>
                            <h3>Solution</h3>
                            <p>NFD.gg heralds a new era in alpha communities, one where they have their own platform, which structures and condenses relevant information on all these alpha activities, where our team monitors any updates on these activities 24/7. No more reading 2000+ discord messages a day and tracking twitter day in, day out. Everything you ever need to know can be found on NFD.gg.</p>
                            <div className='overlap_bttom'>
                                <hr />
                                <div className="overlap_bttomFlex">
                                    <div className='overlap_svg'>
                                        <OverlapAbout />
                                    </div>
                                    <span>NFD will save you time and help you earn money in crypto.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shape_overlay'>
                        <div></div>
                        <Blank />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About
