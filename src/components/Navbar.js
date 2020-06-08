import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import './Navbar.css'

class Navbar extends Component{

    scrollTo = () => {
        scroll.scrollToBottom()
    }

    render(){
        return(
            <div className="navbar">
                <button className="navbutton">About</button>
                {/* <h2>Photos</h2> */}
                {/* <h2>Reviews</h2> */}
                <button className="navbutton" onClick={this.scrollTo}>Contact</button>
            </div>
        )
    }
}

export default Navbar