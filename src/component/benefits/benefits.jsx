import React from 'react';
import '../benefits/benefits.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faGlobe, faCreditCard, faTicketAlt, faHeadphones } from '@fortawesome/free-solid-svg-icons'

const Benefits = ()=>{
    return(
        <div className="benefits">
            <h1  className="text-center">Benefits of Using Eventify</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faFlag}/>
                                <h3>Create Events Easily</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure inventore eius tempore enim soluta natus ipsam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                                <FontAwesomeIcon icon={faGlobe}/>
                                <h3>Access Anywhere, Anytime</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure inventore eius tempore enim soluta natus ipsam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FontAwesomeIcon icon={faCreditCard}/>
                                <h3>Payment Method</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure inventore eius tempore enim soluta natus ipsam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FontAwesomeIcon icon={faTicketAlt}/>
                                <h3>Buy Online and Check in</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure inventore eius tempore enim soluta natus ipsam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FontAwesomeIcon icon={faHeadphones}/>
                                <h3>Great Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure inventore eius tempore enim soluta natus ipsam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body text-center">
                            <FontAwesomeIcon icon={faHeadphones}/>
                                <h3>Great Support</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure inventore eius tempore enim soluta natus ipsam</p>
                            </div>
                        </div>
                    </div>
                       
                </div>
                
            </div>
            
        </div>
    )
}

export default Benefits;