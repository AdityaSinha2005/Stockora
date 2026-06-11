import React from 'react';

function Education() {
    return (
        <div className='container py-5'>
            <div className='row align-items-center'>

                <div className='col-lg-6 col-md-6 col-12 text-center mb-4 mb-md-0'>
                    <img
                        src='/media/images/education.svg'
                        className='img-fluid'
                        style={{ maxWidth: '70%' }}
                        alt='Education'
                    />
                </div>

                <div className='col-lg-6 col-md-6 col-12'>
                    <h1 className='fw-bold mb-4'>
                        Free and Open Market Education
                    </h1>

                    <p className='mb-4'>
                        We provide free and open access to market education
                        resources to empower your trading journey.
                    </p>

                    <a
                        href=''
                        className='text-decoration-none'
                    >
                        See Resources{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>

                    <p className='mt-5 mb-4'>
                        Trading Q&A, the most active trading and investment
                        community in India for all your market related queries.
                    </p>

                    <a
                        href=''
                        className='text-decoration-none'
                    >
                        Trading Q&A{" "}
                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Education;