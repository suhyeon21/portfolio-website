import React from "react";
import "./home.css";

const Data = () => {
	return (
		<div className='home__data'>
			<h1 className='home__title'>Kan Suhyeon</h1>
			<h3 className='home__subtitle'>Frontend Developer</h3>
			<p className='home__description'>짧은 자기소개</p>

			<a href='#contact' className='button button--flex'>
				Say Hello
			</a>
		</div>
	);
};

export default Data;
