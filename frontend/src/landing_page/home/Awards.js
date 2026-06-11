import React from 'react'

function Awards() {
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-3'>
                    <img src='/media/images/largestBroker.svg' className='img-fluid' alt='Award 1'/>
                </div>
                <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-3 mt-lg-5 mt-3'>
                   <h1 className='fw-bold mb-3'>Largest stock broker in India</h1>
                   <p className='mb-4 mt-3'>Recognized for excellence in investment solutions</p>
                   <div className='row align-items-center'>
                      <div className='col-md-6 col-12'>
                        <ul className='p-4'>
                        <li>Best Customer Service</li>
                        <li>Most Innovative Trading Platform</li>
                        <li>Highest Customer Satisfaction</li>
                       </ul>
                      </div>
                      <div className='col-md-6 col-12'>
                         <ul className='p-4'>
                            <li>Best Research and Advisory Services</li>
                            <li>Fastest Growing Brokerage Firm</li>
                            <li>Best Mobile Trading App</li>
                        </ul>
                      </div>
                   </div>
                   <img src='/media/images/pressLogos.png' className='img-fluid mt-4' alt='Award'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;