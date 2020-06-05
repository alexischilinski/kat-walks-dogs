import React, { Component } from 'react'

class Contact extends Component{

    state = {
        name: "",
        email: "",
        message: "",
        success: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <>
                <h1 className="contact-heading">Contact</h1>
                <form className="contact-form" action="https://send.pageclip.co/tNQQLb0gjhOrYmbWLjULD4NqovJlq1zd" method="post">
                    <input onChange={this.handleChange} placeholder="name" type="text" name="name" value={this.state.name} />
                    <input onChange={this.handleChange} placeholder="email" type="email" name="email" value={this.state.email} />
                    <textarea className="message-input" placeholder="message" onChange={this.handleChange} name="message" value={this.state.message}></textarea>
                    <button type="submit" class="pageclip-form__submit">
                        <span>Send</span>
                    </button>
                </form>
                <div className="contact-info">
                    <p>Phone: (339)235-0099</p>
                    <p>Email: katdogscompany@gmail.com</p>
                </div>
            </>
        )
    }
}

export default Contact;