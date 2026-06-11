import React from 'react'

function Pricing() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-4 col-md-12 col-12 mb-4'>
                    <h1 className='fw-bold mb-3'>Unbeatable Pricing</h1>
                    <p>We offer competitive pricing to ensure you get the best value for your investment.</p>
                    <a href='' className='text-decoration-none'>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>

                <div className='col-lg-2 d-none d-lg-block'></div>

                <div className='col-lg-6 col-md-12 col-12 mb-5'>
                    <div className='row text-center'>
                        <div className='col-md-6 col-12 p-3 border m-1'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>

                        <div className='col-md-6 col-12 p-3 border m-1'>
                            <h1>₹49</h1>
                            <p>Intraday and F&O trading</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;