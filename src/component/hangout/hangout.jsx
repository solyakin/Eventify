import React from 'react';
import '../hangout/hangout.css';
import hangoutImage from '../assets/Hangout.svg';

const Hangout = () => {
    return(
        <div className="hangout">
            <div className="hangout-image">
                <img src={hangoutImage} alt=""/>
            </div>
            <div className="hangout-text">
                <div className="hangout-info">
                    <h3>Connect with friends through our Hangout Feature</h3>
                    <p>With the Hangout feature, users can create hangouts for friends, colleague or family member. Each member get an instant notification on their phone and a reminder 24 hours to the event.</p>
                </div>
                <button className="get-started-btn">Sign up Now</button>
            </div>
            
        </div>
    )
}

export default Hangout;