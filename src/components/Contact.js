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
            <form action="https://send.pageclip.co/tNQQLb0gjhOrYmbWLjULD4NqovJlq1zd" class="pageclip-form" method="post">
                <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                <input onChange={this.handleChange} type="email" name="email" value={this.state.email} />
                <textarea onChange={this.handleChange} type="text" name="message" value={this.state.message}></textarea>
                <button type="submit" class="pageclip-form__submit">
                    <span>Send</span>
                </button>
        </form>
            </>
        )
    }
}

export default Contact;