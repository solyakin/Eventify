import React from 'react';
import Benefits from '../component/benefits/benefits';
import Hangout from '../component/hangout/hangout';
import LandingPage from '../component/landingpage/landingPage';
import UpcomingEvent from '../component/upcomingevent/upcomingevent';
import Users from '../component/users/user';
import Footer from '../component/footer/footer';

const Homepage = () => {
    return(
        <div className="homepage">
            <LandingPage/>
            <Users/>
            <Hangout/>
            <Benefits/>
            <UpcomingEvent/>
            <Footer/>
        </div>
    )
}

export default Homepage;