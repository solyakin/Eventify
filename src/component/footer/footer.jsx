import React from 'react';
import '../footer/footer.css';
import fb from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import snapchat from '../assets/snapchat.svg';
import ig from '../assets/instagram.svg';
import email from '../assets/email.svg';

const Footer = () => {
    return(
        <div className="footer">
            <div>
            <div className="footer-text">
                <h3>Eventify</h3>
                <p>Eventify is a elegantly designed online booking and ticketing website. The website will help you to Sell events ticket online by using Event Tickets Plus to add daily schedules, to promote your speakers, to organize and create awesome Events and much more</p>
            </div>
            </div>
            <div className="icons">
                <img src={fb} alt=""/>
                <img src={twitter} alt=""/>
                <img src={ig} alt=""/>
                <img src={snapchat} alt=""/>
                <img src={email} alt=""/>
            </div>

            <p className="copyright">copyright 2021</p>
        </div>
    )
}

export default Footer;