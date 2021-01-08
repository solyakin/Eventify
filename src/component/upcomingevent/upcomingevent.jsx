import React from 'react';
import '../upcomingevent/upcomingevent.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import allFiles from '../assets/files.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faFile } from '@fortawesome/free-solid-svg-icons'
SwiperCore.use([Autoplay]);

const UpcomingEvent = () =>{
    const files = allFiles; 
    
    return(
        <div className="upcoming-event">
            
            <h2>
                <FontAwesomeIcon icon={faCalendar}/>
                Upcoming Events
            </h2>
            
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                // centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                >
                {
                files.map( file => {
                    return <SwiperSlide key={file.id}>
                        <div className="event-wrapper">
                            <img src={file.image} alt={file.name}/>
                            <div className="event-details">
                                <p>{file.description}</p>
                                <span>{file.price}</span>
                            </div>
                    
                            <p>
                            <FontAwesomeIcon icon={faFile} />
                            {file.category}
                            </p>
                        </div>
                    
                    </SwiperSlide>
                })
                }
                
            </Swiper>
            
            <a href="!#" className="view-all-link">View all events</a>
        </div>
    )
}

export default UpcomingEvent;
