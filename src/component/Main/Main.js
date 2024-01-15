import React from 'react'
import "./main.css"
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Aggregator from '../../pages/Aggregator/Aggregator'
import Features from '../../pages/Features/Features'
import RoadMap from '../../pages/RoadMap/RoadMap'
import Contact from '../../pages/Contact/Contact'

import { motion } from "framer-motion"

const Main = () => {

	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 10 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			animate="visible"
			transition={{ duration: 0.5, delay: 0.25 }}
		>
			<Home />
			<About />
			<Aggregator />
			<Features />
			<RoadMap />
			<Contact />
		</motion.div>
	)
}

export default Main
