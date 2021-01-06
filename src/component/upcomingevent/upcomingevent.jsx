import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwipperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import allFiles from '../assets/files.json';

const UpcomingEvent = () =>{
    const files = allFiles; 
    
    return(
        <div className="upcoming-event">
            <img src="" alt=""/>
            <h1>Upcoming Events</h1>
            
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                {
                files.map( file => {
                    return <SwiperSlide key={file.id}>
                    <img src={file.image} alt={file.name}/>
                    </SwiperSlide>
                })
                }
                
            </Swiper>
            
        </div>
    )
}

export default UpcomingEvent;

{/* <div className="event-one">
                <img src="" alt=""/>
                <div className="details">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <div className="event-one">
                <img src="" alt=""/>
                <div className="details">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <div className="event-one">
                <img src="" alt=""/>
                <div className="details">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <div className="event-one">
                <img src="" alt=""/>
                <div className="details">
                    <h3></h3>
                    <p></p>
                </div>
            </div>
            <div className="event-one">
                <img src="" alt=""/>
                <div className="details">
                    <h3></h3>
                    <p></p>
                </div>
            </div> */}