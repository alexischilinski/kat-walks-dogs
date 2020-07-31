import React, { Component } from 'react'
import './Rates.css'

export const Rates = () => {
    return (
        <div>
            <h1 className="rate-title">Rates</h1>
            <div className="rate-div">
                <p className="rate-text">
                    I aim to provide a breed-specific experience for your dog, complete with fun outdoor activities
                    and optional training.
                </p>
                <p className="rate-text">
                    My general rate is $30 an hour.
                </p>
                <p className="rate-text">
                    I can also provide water and toys, but will be happy to use owner-provided toys.
                </p>
                <p className="rate-text">
                    <a href="https://musherssecret.net/#:~:text=View%20More-,Musher's%20Secret,protection%20in%20many%20different%20environments." target="_blank">Musher's Secret</a> available upon request for protection from hot or cold surfaces.
                </p>
                <br></br>
                <p className="rate-text">
                    I offer other services including:
                </p>
                <ul>
                    <li className="list">Clipping nails - $5</li>
                    <li className="list">Cleaning ears - $5</li>
                </ul>
                <br></br>
                <p className="rate-text">
                    Please contact me for scheduling information and further pricing details.
                </p>
            </div>
        </div>
    )
}