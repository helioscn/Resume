import React from 'react';
import './css/Menu.css';
import Option from './Props/Options';
import soundFile from '../Sounds/MENU_Pick.wav';
import soundSelectFile from '../Sounds/MENU A_Select.wav';

class Menu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			optionSelect: 0,
			currentPage: 0
		};
		this.soundPick = new Audio(soundFile);
		this.soundPick.volume = 0.2;
		this.soundSelect = new Audio(soundSelectFile);
		this.soundSelect.volume = 0.4;
	}
	
	changeColour = (x, playSound) => {
		if (playSound === true) {
			this.soundPick.pause();
			this.soundPick.currentTime = 0;
			this.soundPick.play();
		}
		this.setState({
			optionSelect: x
		})
	}

	setPage = (x) => {
		if (this.state.currentPage === 0) {
			document.getElementById("menu-container").style.margin = "0";
		}
		if (this.state.currentPage > 0) {
			document.getElementById("menu-container").querySelectorAll('.optionDiv')[this.state.currentPage - 1].style.color = "#666";
		}
		document.getElementById("menu-container").getElementsByTagName('div')[x-1].style.color = "#5fc6b9";
		this.soundSelect.currentTime = 0;
		this.soundSelect.play();
		this.setState({
			currentPage: x
		})
	}

	render() {
		return(
			<div onClick={this.props.onClick} id={"menu-container"}>
				<img className={'portrait'} src={require("../Images/me2.png")} alt={"My Face"}/>
				<h1 id={'name'}>HELIOS CHAN</h1>
				<div className={'optionDiv'} onClick={() => this.setPage(1)} onMouseLeave={() => this.changeColour(this.state.currentPage, false)} onMouseEnter={() => this.changeColour(1, true)}><Option name={'About Me'} num={1} hover={this.state.optionSelect} /></div>
				<div className={'optionDiv'} onClick={() => this.setPage(2)} onMouseLeave={() => this.changeColour(this.state.currentPage, false)}  onMouseEnter={() => this.changeColour(2, true)}><Option name={'Experience'} num={2} hover={this.state.optionSelect} /></div>
				<div className={'optionDiv'} onClick={() => this.setPage(3)} onMouseLeave={() => this.changeColour(this.state.currentPage, false)}  onMouseEnter={() => this.changeColour(3, true)}><Option name={'Skills'} num={3} hover={this.state.optionSelect} /></div>
				<div className={'optionDiv'} onClick={() => this.setPage(4)} onMouseLeave={() => this.changeColour(this.state.currentPage, false)}  onMouseEnter={() => this.changeColour(4, true)}><Option name={'Contact'} num={4} hover={this.state.optionSelect} /></div>
			</div>
		);
	}
}

export default Menu;