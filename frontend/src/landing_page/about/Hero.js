import React from 'react'

function Hero() {
  return (
    <div className='container'>
        <div className='row py-5 mb-5 mt-3'>
            <h1 className='display-5 fw-bold text-center lh-base'>We pioneered the discount broking model in India.<br /> Now we are breaking ground with our new technologies.</h1>
        </div>
        <div className='row mt-5 border-top text-muted py-5'>
            <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-3'>
                <p>
                Stockora is a technology-driven investment platform focused on making
                investing simple and accessible for everyone.
                <br />
                <br />
                Our goal is to empower investors with intuitive tools, real-time market
                insights, and a seamless investing experience.
                <br />
                <br />
                We believe that informed decision-making and transparent access to financial
                markets can help individuals achieve their long-term financial goals.
                </p>
            </div>
            <div className='col-lg-6 col-md-6 col-12 p-lg-5 p-3'>
                <p>
                Whether you're a beginner taking your first step into investing or an
                experienced investor managing a portfolio, Stockora is designed to support
                your financial journey.
                <br />
                <br />
                Our platform focuses on simplicity, reliability, and innovation, helping
                users navigate the markets with confidence and ease.
                <br />
                <br />
                Through continuous learning and technology-driven solutions, we aim to make
                investing more accessible and empower individuals to build a stronger
                financial future.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Hero