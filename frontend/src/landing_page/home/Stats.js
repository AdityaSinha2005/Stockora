import React from 'react'

function Stats() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-3'>
                    <h1 className='fw-bold mb-5'>Trust with confidence</h1>

                    <h4>Customer-first always</h4>
                    <p className='text-muted'>We prioritize our customers' needs and strive to provide the best service possible.</p>

                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>We believe in transparency and honesty in all our dealings.</p>

                    <h4>The Stockora universe</h4>
                    <p className='text-muted'>Explore a world of opportunities with our comprehensive trading ecosystem.</p>

                    <h4>Do better with money</h4>
                    <p className='text-muted'>Our tools and resources empower you to make informed financial decisions.</p>
                </div>

                <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-3 text-center'>
                    <img
                        src='/media/images/ecosystem.png'
                        alt='Ecosystem'
                        className='img-fluid'
                        style={{ maxWidth: '75%' }}
                    />

                    <div className='text-center mt-4'>
                        <a href='' className='text-decoration-none me-4'>
                            Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>

                        <a href='' className='text-decoration-none'>
                            Try Stockora Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;