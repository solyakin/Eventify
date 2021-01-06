import React from 'react';
import '../users/user.css';
import conference from '../assets/conference.jpg';
import music from '../assets/music.jpg';
import social from '../assets/social.jpg';

const Users = () => {
    return(
        <div className="users">
            <div className="user-container">
                <h1>A tool for Everyone</h1>
                <p>Eventty was designed with you in mind</p>

                {/* <div className="host">
                    <h1>Host</h1>
                    <p>Access to host millions of events each year. Amazing tracking of all events and activities</p>
                </div>
                <div className="attendee">
                    users has quick accesss to all events hosted on this platform
                </div>
                <div className="social">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, facere!
                </div> */}
                <div className="inner-container">
                    <div className="music">
                        <h1>Music</h1>
                        <img src = {music} alt=""/>
                    </div>
                    <div className="conference">
                        <h1>conference</h1>
                        <img src={conference} alt=""/>
                    </div>
                    <div className="social meeting">
                        <h1>social meeting</h1>
                        <img src={social} alt=""/>
                    </div>
                </div>
                <button className="get-started-btn">Get started</button>
            </div>
        </div>
    )
}
export default Users;