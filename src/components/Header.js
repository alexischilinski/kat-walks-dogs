import React, { Component } from 'react'
import Navbar from './Navbar'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1 className="title">Kat Walks Dogs
                <img alt="pawprints" src="https://lh3.googleusercontent.com/proxy/KFePP-zEtOnS9XeuuiouSkQ1g3nFlu3qgG_6XEQb2GbmO1xKHpgKzhvMTeqWf_hs8q4IX30KSl-JnZ0xOm1z2Us1QFjdMczD_8yrXb69y9JKyod5MKy6RPI2dAt7vsr2JIfbRrJzFme5xp0FReYJBvGU0fBpkaF3Rk0XAecvAMYGE7wpD7nPWjoeyEHJ"></img>
                </h1>
                <Navbar/>
            </div>
        )
    }
}

export default Header