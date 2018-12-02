import React from 'react';

const experience = (props) => {
	return (
		<div onmousedown="return false" id='page-container-2' className='_page-container' style={{zIndex: props.visible, opacity: props.visible}}>
            <div class="_exp-row">
                <div className="_exp-img-container">
                   <img src={require("../Images/Portfolio/haf-back.jpg")} className="_exp-img _img-back" />
                   <img src={require("../Images/Portfolio/haf-front.jpg")} className="_exp-img _img-front" />
            	</div>
            	<div className="_exp-info-container">
            	    <h2>HomeArt Furnishing</h2>
            	    <span className="_exp-tools">HTML, CSS, JavaScript, jQuery, PHP, SQL</span>
            	    <p class="_exp-snippet">A website built for a furnishing company. Comes with a simple CMS to make product management easier. Facebook Graph API.</p>
            	</div>
            </div>
            <div class="_exp-divider"></div>
                <div class="_exp-row">
                    <div className="_exp-img-container">
                    <img src={require("../Images/Portfolio/dct-back.jpg")} className="_exp-img _img-back" />
                    <img src={require("../Images/Portfolio/dct-front.jpg")} className="_exp-img _img-front" />
                </div>
                <div className="_exp-info-container">
                    <h2>Dragon Comfort Technologies Inc.</h2>
                    <span className="_exp-tools">Wordpress, HTML, CSS</span>
                    <p class="_exp-snippet">First time using Wordpress. Opted for Wordpress due to tight deadline of 3 days.</p>
                </div>
            </div>
            <div class="_exp-divider"></div>
            <div class="_exp-row">
                <div className="_exp-img-container">
                    <img src={require("../Images/Portfolio/edf-back.jpg")} className="_exp-img _img-back" />
                    <img src={require("../Images/Portfolio/edf-front.jpg")} className="_exp-img _img-front" />
                </div>
                <div className="_exp-info-container">
                    <h2>Dragon Fire Distribution Inc.</h2>
                    <span className="_exp-tools">HTML, CSS, JavaScript, jQuery, PHP, SQL</span>
                    <p class="_exp-snippet">Original website was built 6-7 years ago by somebody else. Made website responsive. Threw in a contact form.</p>
                </div>
            </div>
            <div class="_exp-divider"></div>
            <div class="_exp-row">
                <div className="_exp-img-container">
                    <img src={require("../Images/Portfolio/opp-back.jpg")} className="_exp-img _img-back" />
                    <img src={require("../Images/Portfolio/opp-front.jpg")} className="_exp-img _img-front" />
                </div>
                <div className="_exp-info-container">
                    <h2>ONTO Properties Photography</h2>
                    <span className="_exp-tools">HTML, CSS, JavaScript, jQuery, PHP, SQL</span>
                    <p class="_exp-snippet">First website deployed this year for my real estate photography business.</p>
                </div>
            </div>
		</div>
	)
};

export default experience;