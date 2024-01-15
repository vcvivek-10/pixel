import React, { useState } from 'react'
import "./aggregator.css"
import thridImg from "../../img/third_block_one_blur.webp"
import thirdTwoImg from "../../img/third_block_two_blur.png"
import slideImgOne from "../../img/AggContent2OPT.webp"
import slideImgTwo from "../../img/AggContent2OPT1.webp"
import ovelayImg from "../../img/AggOverlayOPT.webp"
import alphaMobile from "../../img/AlphaToolMobileOPT.webp"
import hotImgOpt from "../../img/HotEventsImage2OPT.webp"
import showRievw from "../../img/ShowReviewTop2OPT.webp"
import showRievwBot2 from "../../img/ShowReviewBtm2OPT.webp"
import feedImg from "../../img/FeedImageOPT.webp"
import { AggButton } from '../../utils/platformInfo'
import TwitterMini from '../../component/svg/TwitterMini'
import RoundTitle from '../../component/svg/RoundTitle'
import SpamPoint from '../../component/svg/SpamPoint'
import SpamDotted from '../../component/svg/SpamDotted'

import opt1 from "../../img/1OPT.webp"
import opt2 from "../../img/2OPT.webp"
import opt3 from "../../img/3OPT.webp"
import opt4 from "../../img/4OPT.webp"
import opt5 from "../../img/5OPT.webp"


const Aggregator = () => {

    const [img, setImg] = useState(opt1)
    const [numberActive, setNumberActive] = useState(1)


    const toggleActive = (current) => {
        // console.log(current);
        if (current === 1) {
            setImg(opt1)
            setNumberActive(current)
        } else if (current === 2) {
            setImg(opt2)
            setNumberActive(current)
        }
        else if (current === 3) {
            setImg(opt3)
            setNumberActive(current)
        }
        else if (current === 4) {
            setImg(opt4)
            setNumberActive(current)
        }
        else if (current === 5) {
            setImg(opt5)
            setNumberActive(current)
        }
    }
    // console.log(img);

    return (
        <div className='main_flex'>
            <div className='aggregate_backGradient'>
                <div className='agg_backImg'></div>
                <div className='agg_backGridImg'></div>
                <div className='agg_thirdImg'>
                    <img src={thridImg} alt="" />
                </div>
                <div className='agg_third_twoImg'>
                    <img src={thirdTwoImg} alt="" />
                </div>
                <div className='agg_third_threeImg'>
                    <img src={thirdTwoImg} alt="" />
                </div>
                <div className='aggregate_main'>
                    <div className="aggregate_main_content">
                        <div className="aggregateMain_dlex">
                            <div className="aggMain_left">
                                <img src={slideImgOne} alt="" />
                                <img src={slideImgTwo} alt="" />
                            </div>
                            <div className='noneFix'></div>
                        </div>
                        <div className='aggregate_both_dflex'>
                            <div className="aggBoth_left">
                                <img src={ovelayImg} alt="" />
                            </div>
                            <div className="aggBoth_right">
                                <h3>FIRST WEB3 CRYPTO</h3>
                                <h2>Keeping track of projects in <span>one place</span></h2>
                                <p>The NFD.gg aggregator allows you to create a specific card of any project and parse any type of information from Discord, Twitter, Dune Analytics, TradingView, Github etc. into your own dashboard.</p>
                                <div className="aggButton_div">
                                    <button className='start_creating_btn'>Start Creating</button>
                                    <button className='view_roadmap_btn'>View Roadmap</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aggregate_alpha">
                        <div className='agg_planeDiv'>
                            <h2>Find alpha before anyone else with us</h2>
                            <div className='agg_alphaBtn_div'>
                                {
                                    AggButton?.map((data, index) => {
                                        return (
                                            <div key={index} className={`${data.aggBtn_div} ${data.bgClass}`}>
                                                {data.aggIcon}
                                                {data.aggTitle}
                                                {
                                                    data.pointedArr &&
                                                    <div className={`${data?.pointedArr?.arrowDiv}`}>
                                                        {data?.pointedArr?.arrowIcon}
                                                    </div>
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="agg_alpha_img">
                                <div className="agg_alphaImg_inner">
                                    <div className='agg_inner_plane'>
                                        <div className="agg_inner_planeFlex">
                                            <img src={img} alt="" />
                                            <div className='agg_inner_selected'>
                                                <div
                                                    className={numberActive === 1 && "numberCount"}
                                                    onClick={() => toggleActive(1)}
                                                >
                                                    1
                                                </div>
                                                <div
                                                    className={numberActive === 2 && "numberCount"}
                                                    onClick={() => toggleActive(2)}>
                                                    2
                                                </div>
                                                <div
                                                    className={numberActive === 3 && "numberCount"}
                                                    onClick={() => toggleActive(3)}>
                                                    3
                                                </div>
                                                <div
                                                    className={numberActive === 4 && "numberCount"}
                                                    onClick={() => toggleActive(4)}>
                                                    4
                                                </div>
                                                <div
                                                    className={numberActive === 5 && "numberCount"}
                                                    onClick={() => toggleActive(5)}
                                                >
                                                    5+
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img className='agg_alphaMobImg' src={alphaMobile} alt="" />
                                    <section className='alpha_find'>
                                        <div className="alpha_findLeft">
                                            <h3>Finding Alpha is easy</h3>
                                            <p>Alpha search tool will let you be one of the first people to find the most promising alpha by tracking influencers and the most hyped projects.</p>
                                        </div>
                                        <div className="alpha_findRight">
                                            <button className='free_try_btn'>Try now for free</button>
                                            <button className='follow_twit_btn'>
                                                <div>
                                                    <TwitterMini />
                                                    Follow Twitter
                                                </div>
                                            </button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aggregate_noSpam">
                        <div className="aggregate_noSpam_main">
                            <div className="agg_noSpam_left">
                                <div className="agg_Spam_titleDiv">
                                    No spam, only
                                    <div className="agg_titleSpan">
                                        <div className="alpha_roundTitle">
                                            <RoundTitle />
                                        </div>
                                        Alpha
                                    </div>
                                </div>
                                <div className='agg_spam_dec'>
                                    We publish on the NFD.gg platform only that activities that have been selected and researched by our team.
                                </div>
                                <div className='agg_spam_decTwo'>
                                    You can see several categories of these events, from retrodrops and early projects to raffles and mint sales.
                                </div>
                                <div className="agg_spam_downArr">
                                    <SpamPoint />
                                </div>
                                <div className='all_Step'>All of these events have an overview page and a step-by-step guide.</div>
                                <div className="agg_spam_downArr">
                                    <SpamDotted />
                                </div>
                                <div className="dotted_desc">
                                    And a major plus is that they all have an “Auto-update feed”, and all updates/changes to these activities are analyzed and researched by our team and published in this feed.
                                </div>
                            </div>
                            <div className="agg_noSpam_right">
                                <div className="agg_right_firstImg">
                                    <img src={hotImgOpt} alt="" />
                                </div>
                                <div className="agg_right_secondImg">
                                    <div className="agg_right_subFirst">
                                        <img src={showRievw} alt="" />
                                    </div>
                                    <div className="agg_right_subSecond">
                                        <img src={showRievwBot2} alt="" />
                                    </div>
                                </div>
                                <div className="agg_thirdright_Img">
                                    <img src={feedImg} alt="" />
                                </div>
                            </div>
                            <div className="agg_noSpam_overlay">
                                <div className="agg_spam_overRight">
                                    <div className="agg_spam_overstick"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Aggregator
