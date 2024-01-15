import React, { useState } from 'react'
import "./home.css"
import Teddy from '../../component/svg/Teddy'
import { MacWin, PlateFromData } from "../../utils/platformInfo"
import SoftwareHi from '../../component/svg/SoftwareHi'
import PlatformSoftware from '../../component/commonComponent/PlatformSoftware'
import PlatSoftBackImg from '../../component/commonComponent/platSoftBackImg'
import PlatSoftButton from '../../component/commonComponent/PlatSoftButton'

const Home = () => {

    const [active, setActive] = useState(MacWin[0]?.macWinTitle)

    return (
        <div className='main_flex' style={{backgroundColor:"rgb(228,231,231)"}}>
            <div className='main_container' style={{backgroundColor:"rgb(228,231,231)"}}>
                <div className='home_flex'>
                    <div className='home_left'>
                        <Teddy />
                        <PlatformSoftware
                            titleDivClass="platform_title"
                            firstTitleClass="first_title"
                            firstTitle="NFD platform"
                            secondTitleClass="second_title"
                            secondTitle="“NFD.gg”"
                            descriptionClass="platform_desc"
                            description="An Alpha community 2.0 with its own platform for participating, searching, and tracking   any crypto related information."
                        />
                        <div className='info_tool'>
                            {
                                PlateFromData?.map((data, index) => {
                                    return (
                                        <div key={index} className={`${data.main_Div}`}>
                                            <div className={`${data.svg_Style}`}>
                                                {data.svgIcon}
                                            </div>
                                            <div className={`${data.title_Div}`}>
                                                {data.title}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <PlatSoftButton
                            platFormLink="platform_links"
                            tryDivClass="try_btn_div"
                            tryBtnCLass="try_btn"
                            tryBtn="Try Platform"
                            howDivCLass="how_works"
                            howBtn="How it works?"
                        />
                        <PlatSoftBackImg
                            platSoftImgClass="platform_backImg bottomPosi"
                        />
                    </div>
                    <div className='home_right'>
                        <SoftwareHi />
                        <PlatformSoftware
                            titleDivClass="software_title"
                            firstTitleClass="softFirst_title"
                            firstTitle="NFD software"
                            secondTitleClass="softwareSecond_title"
                            secondTitle="“Combine”"
                            descriptionClass="platform_desc"
                            description="Handle your crypto-wallets, farm activities and retrodrops on a single app."
                        />
                        <div className='mac_window'>
                            {
                                MacWin?.map((data, index) => {
                                    return (
                                        <button key={index} className={`${data.buttonClass}  ${active === data.macWinTitle && 'active'}`}
                                            onClick={() => setActive(data.macWinTitle)}
                                        >
                                            <div className={`${data.btnTop}`}>
                                                {data.macWinIcon}
                                                <span className={`${data.macWinTitleClass}`}>
                                                    {data.macWinTitle}
                                                </span>
                                            </div>
                                            <div className={`${data.btnBottom} ${active === data.macWinTitle && 'active'}`}>
                                                {data.btnBackImg}
                                            </div>
                                        </button>
                                    )
                                })
                            }
                        </div>

                        <PlatSoftButton
                            platFormLink="platform_links"
                            tryDivClass="try_btn_div"
                            tryBtnCLass="try_btn"
                            tryBtn="Download"
                            howDivCLass="how_works"
                            howBtn="How it works?"
                        />
                        <PlatSoftBackImg
                            platSoftImgClass="platform_backImg topPosi"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
