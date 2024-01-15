import React, { useEffect, useState } from 'react'
import "./header.css"
import NavbarLogo from '../svg/HeaderLogo'
import NavbarIcon from '../svg/HeaderIcon'
import Discord from '../svg/Discord'
import Twitte from '../svg/Twitte'
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {

    const [lastScrollY, setLastScrollY] = useState(0)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [show, setShow] = useState("")


    const controlNavbar = () => {
        if (window.scrollY > 80) {
            // if(window.scrollY > lastScrollY){
            //     setShow("hide")
            // }else{
            //     setShow("show")
            // }
            setShow("show")
        } else {
            setShow("")
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar)

        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    }, [lastScrollY])

    const openMobileMenu = () => {
        setMobileMenu(true)
    }


    return (
        <div className={`container-fluid container_wrapper ${show}`}>
            <nav className={`navbar navbar-expand-lg navbar-light ${show ? "bg_trans height_nav" : "bg-light"} navbar_container`}>
                <div className="navbar_flex">
                    <div className='d_flex'>
                        <div>
                            <NavbarIcon />
                        </div>
                        <div>
                            <NavbarLogo show={show} />
                        </div>
                    </div>
                    <div className='hamburger'>
                        {
                            mobileMenu ?
                                <VscChromeClose onClick={() => setMobileMenu(false)} />
                                :
                                <SlMenu onClick={openMobileMenu} />
                        }
                    </div>
                    <div className="collapse nav_links navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d_flex">
                            <li className="nav-item">
                                <a className={`nav-link nav_anchor ${show && "color_white"}`} aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav_anchor ${show && "color_white"}`} aria-current="page" href="#">Aggregator</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav_anchor ${show && "color_white"}`} aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav_anchor ${show && "color_white"}`} aria-current="page" href="#">Roadmap</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link nav_anchor ${show && "color_white"}`} aria-current="page" href="#">Contact Us</a>
                            </li>

                        </ul>

                    </div>
                    <div className='d_flex'>
                        <div className='d_flex'>
                            <div className='nav_social'>
                                <Discord />
                            </div>
                            <div className='nav_social'>
                                <Twitte />
                            </div>
                        </div>
                        <div className={`d_flex ${show ? "combine_platfrom_show" : "combine_platfrom_wrapper"}`}>
                            <button className='com_pla_btn'>Combine</button>
                            <button className='com_pla_btn'>Platform</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
