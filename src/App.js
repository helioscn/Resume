import React, { Component } from 'react';
import './App.css';
import Menu from './Sections/Menu';
import About from './Sections/About';
import Experience from './Sections/Experience';
import Skills from './Sections/Skills';
import Contact from './Sections/Contact';
import jsonData from './data';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
			pageLoaded: { abt: 0, exp: 0, skl: 0, cnt: 0 },
			vis: { abt: 0, exp: 0, skl: 0, cnt: 0 }
		};
	}

	drawLine(self, chi, i) {
				chi[i+2].addEventListener("transitionend", function() {
					self.drawText(self, chi, i+2);
				});
				chi[i+1].classList.add("_line");
				chi[i+1].addEventListener("transitionend", function() {
					let lg = chi[i+1].querySelector("._line-glow");
					lg.style.opacity = '0';
					chi[i+2].style.backgroundColor = "red";
				});
	}

	drawText(self, chi, i) {
		let text = chi[i].querySelector("._line-text");
		text.style.opacity = '1';
		text.addEventListener("transitionend", function() {
			if (i < 3) {
				chi[i].style.backgroundColor = '#444';
				self.drawLine(self, chi, i);
			} else {
				var par = document.getElementById("page-container-1").querySelectorAll("p");
				self.parAnim(self, par[1], jsonData[0].sp, "", 0, 1);
			}
		});
	}

	drawCircle(self) {
		var chi = Array.from(document.getElementById("timeline").children);
		chi[0].classList.add("_circle");
		chi[0].style.backgroundColor = "red";
		chi[2].classList.add("_circle");
		chi[4].classList.add("_circle");
		setTimeout(() => {
			self.drawText(self, chi, 0);
		}, 300);
	}

	showIcons(self, icons, i) {
		setTimeout(() => {
			if (i < 4) {
				icons[i].style.opacity = 1;
				i++;
				self.showIcons(self, icons, i);
			} else {
				return;
			}
		}, 200);
	}

	parAnim(self, par, text, disp, i, stage) {
		if (i < text.length) {
			setTimeout(() => {
				if (i+3 < text.length) {
				    for (var o = i; o < i+3; o++) {
                		disp += text[o];
                	}
				    i += 3;
				} else {
				    disp += text[i];
				    i++;
				}
				par.innerHTML = disp;
				self.parAnim(self, par, text, disp, i, stage);
			}, 0);
		} else {
			if (stage === 0) {
				self.drawCircle(self);
			} else if (stage === 1) {
				let icons = document.querySelectorAll("._icon-hobbies");
				self.showIcons(self, icons, 0);
			} else {
				return;
			}
		}
	}

	mAbout = (self) => {
		if (this.state.pageLoaded.abt == 0) {
			setTimeout(function () {
				var par = document.getElementById("page-container-1").querySelectorAll("p");
				self.parAnim(self, par[0], jsonData[0].fp, "", 0, 0);
			}, 1000);
		}
	}

	menuClick = (e) => {
		if (e.target.textContent === "About Me") {
			this.setState({
				currentPage: 1,
				pageLoaded: { ...this.state.pageLoaded, abt: 1 },
				vis: { abt: 1, exp: 0, skl: 0, cnt: 0 }
			});
			this.mAbout(this);
		} else if (e.target.textContent === "Experience") {
			this.setState({
				currentPage: 2,
				pageLoaded: { ...this.state.pageLoaded, exp: 1 },
				vis: { abt: 0, exp: 1, skl: 0, cnt: 0 }
			});

            let mainContainer = document.getElementById("main-container");
            let pageContainer = document.getElementById("page-container-2");
            let eleFromTop = (window.innerHeight / 2) - (mainContainer.clientHeight / 2);
            let containerHeight = pageContainer.clientHeight;
            let ratio = mainContainer.clientHeight / pageContainer.clientHeight;
			document.getElementById("page-container-2").addEventListener("mousemove", function(e) {
			    let mouseY = e.clientY;
			    let mousePosWithinDiv = mouseY - eleFromTop;

			    let scrollPercent = mousePosWithinDiv / (mainContainer.clientHeight);
                let scrollToPos = (containerHeight * scrollPercent) * (ratio * 1.2);

			    pageContainer.style.top = -scrollToPos + "px";
			});
		} else if (e.target.textContent === "Skills") {
			this.setState({
				currentPage: 3,
				pageLoaded: { ...this.state.pageLoaded, skl: 1 },
				vis: { abt: 0, exp: 0, skl: 1, cnt: 0 }
			});
			if (this.state.pageLoaded.skl == 0) {
			document.getElementById("page-container-3").style.height = "600px";
			setTimeout(function() {
				var sklChl = Array.from(document.getElementById("page-container-3").querySelector("._flex-vertical").children);
				let i = 0;
				let sklVal = [80, 70, 40, 40, 25, 20, 20, 20, 15];
				let showSpanInterval = setInterval(function() {
					if (i < sklChl.length) {
						Object.assign(sklChl[i].querySelector("span").style, {
							opacity: 1,
							webkitTransform: "scale(1)",
							mozTransform: "scale(1)",
							transform: "scale(1)"
						});
						i++;
					} else {
						clearInterval(showSpanInterval);
						let expBarInterval = [];
						let expBarPercent = [0, 0, 0, 0, 0, 0, 0, 0, 0];
						let expBarColor = [255, 255, 255, 255, 255, 255, 255, 255, 255];
						for (let r = 0; r < sklChl.length; r++) {
							expBarInterval.push(setInterval(function() {
								if ((expBarPercent[r] - 1) < sklVal[r]) {
									sklChl[r].querySelector("span").querySelector("b").innerHTML = expBarPercent[r] + "%";
									sklChl[r].querySelector("div").style.width = expBarPercent[r] + "%";
									sklChl[r].querySelector("div").style.backgroundColor = "rgba(" + 255 + ", " + (255 - expBarColor[r]) + ", 0, 1)";
									expBarPercent[r]++;
									expBarColor[r] = expBarColor[r] - (255/100);
								} else {
									clearInterval(expBarInterval[r]);
								}
							}, 10));
						}
					}
				}, 100);
			}, 1000);
			}
		} else if (e.target.textContent === "Contact") {
		    this.setState({
            	currentPage: 4,
            	pageLoaded: { ...this.state.pageLoaded, cnt: 1 },
            	vis: { abt: 0, exp: 0, skl: 0, cnt: 1 }
            });
		}
	}
  render() {
    return (
		<div id={'main-container'}>
			<Menu onClick={(e) => this.menuClick(e)} />
			<About visible={this.state.vis.abt} /> 
			<Experience visible={this.state.vis.exp} />
			<Skills visible={this.state.vis.skl} />
			<Contact visible={this.state.vis.cnt} />
		</div>
    );
  }
}

export default App;
