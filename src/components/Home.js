import React, { Component } from 'react'
import katPhoto from '../components/photos/kat.png'

export const Home = () => {
    return (
        <div className="home">
            <div className="profile">
                {/* <img className="photo" src="https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"></img> */}
                <img className="photo" src={katPhoto}></img>
                <div className="blurb-div">
                    <div className="blurb intro">My name is Kat DiMascio. I am a graduate of Becker College with an Associate Degree in Animal Care and Management.</div>
                    <div className="blurb info">Kat Walks Dogs is a unique experience for your dog in that I can assist with training or just provide simple daily exercise!</div>
                    <div className="blurb end">Lets get your dog out there and moving!</div>
                </div>
            </div>
        </div>
    )
}