import React, { Component } from 'react'
import katPhoto from '../components/photos/kat.png'
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <h1 className="about-title">I'm Kat DiMascio!</h1>
            <div className="profile">
                <img className="photo" src={katPhoto}></img>
                <div className="blurb-div">
                    <div className="blurb intro">I am a graduate of Becker College with an Associate Degree in Animal Care and Management.</div>
                    <div className="blurb info">My goal is to give your dog a unique outdoor experience that can be breed-specific. I can assist with training or just provide simple daily exercise!</div>
                    <div className="blurb end">Let's get your dog out there and moving!</div>
                </div>
            </div>
        </div>
    )
}