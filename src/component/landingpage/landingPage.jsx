import React from 'react';
import calender from '../assets/calendar-animate.svg';
import '../landingpage/landingpage.css';

const LandingPage = () => {
    return(
        <div className="landingpage">
            <div className="wrapper">
                <div className="intro-text">
                    
                        <h1>The Easiest Way to Book Event and sell Event Ticket Online </h1>
                        <p>Eventty is an online event ticketing tool that allows event organisers host millions of events each year. Sign in today to enjoy amazing features and services. It is Simple and free.</p>
                        <button className="get-started-btn">Get Started</button>
                    
                </div>
                <div className="hero-image">
                    <img src={calender} alt="hero-img"/>
                    
                </div>
            </div>
        </div>
    )
}
export default LandingPage;