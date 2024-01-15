import React from 'react'
import "./footer.css"
import FooterIcon from "../svg/FooterIcon"

const Footer = () => {
	return (
		<div className='footer'>
			<div className="footer_container">
				<div className="footer_contentFlex">
					<div className="footer_innerFlex">
						<div className="footer_left">
							<FooterIcon />
							<span>© 2023 NFD, INC. ALL RIGHTS RESERVED</span>
							<div className="footer_left_right">
								<a href="#">Privacy</a>
								<a href="#">Term of use</a>
							</div>
						</div>
						<div className="footer_right">
							<a href="#">contact@nfd.gg</a>
							<button className="try_appBtn">Try App</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
