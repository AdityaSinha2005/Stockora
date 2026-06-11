import React from 'react'

function Team() {
  return (
     <div className='container py-5'>
        <div className='row p-5 mt-5 border-top'>
            <h1 className='display-5 fw-bold text-center'>PEOPLE</h1>
        </div>
        <div className='row p-5 text-muted align-items-center'>
            <div className='col-lg-6 col-md-6 col-12 p-3'>
               <img src="media/images/adityasinha.png" className="img-fluid rounded-circle shadow" alt="Aditya Sinha" />
            </div>
            <div className='col-lg-6 col-md-6 col-12 p-3 text-start'>
                <p>
                Aditya Sinha is the founder of Stockora, a modern trading and investment platform
                designed to make investing simple, transparent, and accessible for everyone.
                Currently pursuing a B.Tech in Computer Science and Engineering, he is passionate
                about software development, financial technology, and building products that solve
                real-world problems.
                </p>

                <p>
                Through Stockora, his vision is to empower individuals with the tools and knowledge
                needed to make informed investment decisions. He has experience in web development,
                data structures & algorithms, and continuously explores new technologies to create
                scalable and user-friendly applications.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Team