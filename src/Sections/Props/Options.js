import React from 'react';

const option = ( props ) => {
	if (props.hover == props.num) {
		return (
			<React.Fragment>
				<div className={'optionSelector'}></div>
				<span>{props.name}</span>
			</React.Fragment>
		)
	} else {
		return(
			<span>{props.name}</span>
		)
	}
}

export default option;