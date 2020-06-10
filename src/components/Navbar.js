import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component{

    scrollTo = () => {
        scroll.scrollToBottom()
    }

    render(){
        return(
            <div className="navbar">
                <Link to="/"><button className="navbutton">Home</button></Link>
                <Link to="/rates"><button className="navbutton">Rates</button></Link>
                <Link to="/contact"><button className="navbutton">Contact</button></Link>
                {/* <button className="navbutton">Calendar</button> */}
            </div>
        )
    }
}

export default Navbar