import React from 'react';

const about = (props) => {
	return (
		<div onmousedown="return false" id='page-container-1' className='_page-container' style={{zIndex: props.visible, opacity: props.visible}}>
			<p></p>
			<div id='timeline'>
				<div className='_circle-base'><span className='_line-text'><b>(2009)</b><br />Entered Earl Haig Secondary School</span></div>
				<div className='_line-base'><div className='_line-glow'></div></div>
				<div className='_circle-base'><span className='_line-text'><b>(2013)</b><br />Psychology at York University (Keele)</span></div>
				<div className='_line-base'><div className='_line-glow'></div></div>
				<div className='_circle-base'><span className='_line-text'><b>(2017)</b><br />Graduated with a BA Hons.</span></div>
			</div>
			<p></p>
			<div className='_flex-grid'>
				<img className={'_icon-hobbies'} src={require("../Images/pc.png")} alt={""}/>
				<img className={'_icon-hobbies'} src={require("../Images/cooking.png")} alt={""}/>
				<img className={'_icon-hobbies'} src={require("../Images/swimming.png")} alt={""}/>
				<img className={'_icon-hobbies'} src={require("../Images/dancing.png")} alt={""}/>
			</div>
		</div>
	)
};

export default about;