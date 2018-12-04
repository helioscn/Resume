import React, { Component } from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.sendClick = this.sendClick.bind(this);
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-url-encoded" },
            body: encode({ "form-name": "contact", ...this.state })
        }).then(
            () => {
                var wheels = document.querySelectorAll(".sm-icon-circle");
                for (var i = 0; i < wheels.length; i++) {
                    wheels[i].style.transform = "rotate(2160deg)";
                }
                var taxi = document.getElementById("form-taxi");
                var formButton = document.getElementById("submit-form");
                taxi.style.marginLeft = "1119px";
                formButton.innerHTML = "sending...";
                setTimeout(function() {
                    taxi.style.transform = "translateX(-970px)";
                    formButton.innerHTML = "sent!";
                }, 1500);
            }
        ).catch(
            error => alert(error)
        );
        e.preventDefault();
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    sendClick = (e) => {
        document.getElementById("form-button").click();
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div onmousedown="return false" id='page-container-4' className='_page-container' style={{zIndex: this.props.visible, opacity: this.props.visible}}>
                <form id="contact-form" onSubmit={this.handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="_contact-input-container">
                        <input onChange={this.handleChange} value={name} name="name" placeholder="Name" />
                        <input onChange={this.handleChange} value={email} name="email" placeholder="Email" />
                    </div>
                    <textarea onChange={this.handleChange} value={message} name="message" placeholder="Message" />
                    <button id="form-button" type="submit"></button>
                </form>
                <div id="form-taxi">
                <div onClick={(e) => this.sendClick(e)} id="submit-form">send</div>
                <div className="sm-container">
                    <div className="sm-icon-circle"><img src={require("../Images/linkedin.png")} /></div>
                    <div className="sm-icon-circle"><img src={require("../Images/github.png")} /></div>
                </div>
                </div>
                <h2>helioschan95@gmail.com</h2>
            </div>
        )
    }
}

export default Contact;