import React from 'react'
import "./readmap.css"
import fifthBlock from "../../img/fifth_block_one_elips_blur.webp"
import fifthMidBlock from "../../img/fifth_block_two_elips_blur.webp"
import RoadMapStatus from '../../component/commonComponent/RoadMapStatus'
import { roadMapStaus, stageOneContent } from '../../utils/platformInfo'

const RoadMap = () => {
    return (
        <div className='main_flex'>
            <div className='roadMap_container'>
                <div className="roadmap_ovelay"></div>
                <div className="roadmap_left_backImg">
                    <img src={fifthBlock} alt="" />
                </div>
                <div className="roadmap_mid_backImg">
                    <img src={fifthMidBlock} alt="" />
                </div>
                <div className="roadmap_right_backImg">
                    <img src={fifthMidBlock} alt="" />
                </div>
                <div className="readmap_content">
                    <div className="readmap_contentFlex">
                        <div className="readmap_firstFlex">
                            <h1>NFD - game changing crypto platform</h1>
                            <div className="roadmap_firstStatus">
                                {
                                    roadMapStaus?.map((data, index) => {
                                        return (
                                            <RoadMapStatus
                                                key={index}
                                                divClass={data.satusDivClass}
                                                statusBlinkDiv={data.statusBlinkDiv}
                                                statusSpan={data.statusSpan}
                                                statusTitle={data.stausTitle}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="roadmap_stageFlex">
                            <div className="roadmap_stage_line"></div>
                            <div className="roadmapAll_stageFlex">
                                <div className="roadmap_allStage">
                                    <div className='stage_lineDot'></div>
                                    <span className='stage_head'>Stage 1</span>
                                    <div className="stageLine"></div>
                                    <div className="stage_content">
                                        {
                                            stageOneContent?.map((data, index) => {
                                                return (
                                                    <RoadMapStatus
                                                        key={index}
                                                        divClass={data.stage1Div}
                                                        statusBlinkDiv={data.blinkDiv}
                                                        statusSpan={data.stageSpan}
                                                        statusTitle={data.stageTitle}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="roadmap_allStage">
                                    <div className='stage_lineDotPlane'></div>
                                    <span className='stage_head'>Stage 2</span>
                                    <div className="stageLine"></div>
                                    <div className="stage_content">
                                        {
                                            stageOneContent?.map((data, index) => {
                                                return (
                                                    <RoadMapStatus
                                                        key={index}
                                                        divClass={data.stage1Div}
                                                        statusBlinkDiv={data.blinkDiv}
                                                        statusSpan={data.stageSpan}
                                                        statusTitle={data.stageTitle}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="roadmap_allStage">
                                    <div className='stage_lineDotPlane'></div>
                                    <span className='stage_head'>Stage 3</span>
                                    <div className="stageLine"></div>
                                    <div className="stage_content">
                                        {
                                            stageOneContent?.map((data, index) => {
                                                return (
                                                    <RoadMapStatus
                                                        key={index}
                                                        divClass={data.stage1Div}
                                                        statusBlinkDiv={data.blinkDiv}
                                                        statusSpan={data.stageSpan}
                                                        statusTitle={data.stageTitle}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="roadmap_allStage">
                                    <div className='stage_lineDotPlane'></div>
                                    <span className='stage_head'>Stage 4</span>
                                    <div className="stageLine"></div>
                                    <div className="stage_content">
                                        {
                                            stageOneContent?.map((data, index) => {
                                                return (
                                                    <RoadMapStatus
                                                        key={index}
                                                        divClass={data.stage1Div}
                                                        statusBlinkDiv={"stage1_blink white_blink"}
                                                        statusSpan={data.stageSpan}
                                                        statusTitle={data.stageTitle}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="roadmap_allStage">
                                    <div className='stage_lineDotPlane'></div>
                                    <span className='stage_head'>Stage 5</span>
                                    <div className="stageLine"></div>
                                    <div className="stage_content">
                                        {
                                            stageOneContent?.map((data, index) => {
                                                return (
                                                    <RoadMapStatus
                                                        key={index}
                                                        divClass={data.stage1Div}
                                                        statusBlinkDiv={"stage1_blink white_blink"}
                                                        statusSpan={data.stageSpan}
                                                        statusTitle={data.stageTitle}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap
