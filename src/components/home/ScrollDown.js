import React from "react";
import { BsMouse } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./home.css";
const ScrollDown = () => {
	return (
		<div className='home__scroll'>
			<a href='' className='home__scroll-button button--flex'>
				<BsMouse className='home__scroll-mouse' />
				<span className='home__scroll-name'>Scroll Down</span>
				<AiOutlineArrowDown className='uil uil-arrow-down home__scroll-arrow' />
			</a>
		</div>
	);
};

export default ScrollDown;
