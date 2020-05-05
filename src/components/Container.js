import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import {Home} from './Home'

export const Container = () => {
    return(
        <div className="container">
            <Route exact path="/"><Home/></Route>
        </div>
    )
}