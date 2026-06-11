import React from 'react'

function Hero() {
    return (
        <div className='container py-5'>
            <div className='row text-center justify-content-center'>
                <img src='/media/images/homeHero.png' alt='Hero' className='img-fluid mb-5' />
                <h1 className='display-4 fw-bold mt-4'>Invest in Your Future</h1>
                <p className='lead text-muted mb-4'>Online platform to invest in stocks, derivatives,mutual funds and more</p>
                <button className='btn btn-primary btn-lg px-5'>Signup</button>
            </div>
        </div>
    );
}

export default Hero;