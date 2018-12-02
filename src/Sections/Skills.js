import React from 'react';

const skills = (props) => {
	return (
		<div onmousedown="return false" id='page-container-3' className='_page-container' style={{zIndex: props.visible, opacity: props.visible}}>
			<div class='_flex-vertical'>
			<div className='_skill-container'>
				<span>HTML / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>CSS / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>JavaScript / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>jQuery / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>PHP / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>SQL / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>Shopify / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>Photoshop / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			<div className='_skill-container'>
				<span>ReactJS / <b>0%</b></span>
				<div className='_skill-bar'></div>
			</div>
			</div>
		</div>
	)
};

export default skills;