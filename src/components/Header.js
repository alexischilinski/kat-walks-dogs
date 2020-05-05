import React, { Component } from 'react'
import Navbar from './Navbar'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 className="title">Kat Walks Dogs
                <img alt="pawprints" src="https://www.pinclipart.com/picdir/big/22-221932_pawprint-white-paw-print-transparent-clipart.png"></img>
                </h1>
                <Navbar/>
            </div>
        )
    }
}

export default Header