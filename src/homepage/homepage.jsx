import React from 'react';
import Header from '../component/header/header';
import LandingPage from '../component/landingpage/landingPage';
import UpcomingEvent from '../component/upcomingevent/upcomingevent';
import Users from '../component/users/user';

const Homepage = () => {
    return(
        <div className="homepage">
            <Header/>
            <LandingPage/>
            <Users/>
            <UpcomingEvent/>
        </div>
    )
}

export default Homepage;