import React from 'react'
import "./Contact.css"
import leftBackImg from "../../img/seventh_block_left_blur.webp"
import rightBackImg from "../../img/seventh_block_right_blur.webp"
import Star from '../../component/svg/Star'
import ContactHand from '../../component/svg/ContactHand'
import Discord from '../../component/svg/Discord'
import TwitterMini from '../../component/svg/TwitterMini'

const Contact = () => {
    return (
        <div className='main_flex' style={{paddingTop:"0px"}}>
            {/* <div className='main_container'> */}
                <div className="contact_flex">
                    <div className="contact_left_backImg">
                        <img src={leftBackImg} alt="" />
                    </div>
                    <div className="contact_right_backImg">
                        <img src={rightBackImg} alt="" />
                    </div>
                    <div className="contact_star1">
                        <Star />
                    </div>
                    <div className="contact_star2">
                        <Star />
                    </div>
                    <div className="contact_hand">
                        <ContactHand />
                    </div>
                    <div className="contact_content">
                        <h3>Join our community </h3>
                        <div className="contact_btnDiv">
                            <button className='joinDes_btn'>
                                <div>
                                    <Discord />
                                    Join discord
                                </div>
                            </button>
                            <button className='follow_twitt'>
                                <div>
                                    <TwitterMini />
                                    Follow Twitter
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default Contact
