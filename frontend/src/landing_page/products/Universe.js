import React from 'react'

function Universe() {
  return (
    <div className='container mt-5'>
      <div className="row text-center">
         <h1 className="fw-bold">The Stockora Universe</h1>
         <p  className="text-muted mb-5">Explore the vast ecosystem of Stockora products and services designed to enhance your trading experience.</p>
         <div className="col-lg-4 col-md-6 col-12 p-3 mt-4">
          <img src="/media/images/smallcaselogo.png" className="img-fluid" style={{ width: "60%" }} />
          <p className="small text-muted">Thematic Investment platform</p>
        </div>
         <div className="col-lg-4 col-md-6 col-12 p-3 mt-4">
            <img src="/media/images/streakLogo.png" className="img-fluid" style={{ width: "60%" }} />
          <p className="small text-muted">Algo & strategy platform</p>
        </div>
         <div className="col-lg-4 col-md-6 col-12 p-3 mt-4">
          <img src="/media/images/sensibulllogo.svg" className="img-fluid" style={{ width: "60%" }} />
          <p className="small text-muted">Options trading platform</p>
        </div>
         <div className="col-lg-4 col-md-6 col-12 p-3 mt-4">
          <img src="/media/images/zerodhaFundhouse.png" className="img-fluid" style={{ width: "60%" }} />
          <p className="small text-muted">Asset Management platform</p>
        </div>
         <div className="col-lg-4 col-md-6 col-12 p-3 mt-4">
            <img src="/media/images/goldenpiLogo.png" className="img-fluid" style={{ width: "60%" }} />
          <p className="small text-muted">Bonds trading platform</p>
        </div>
         <div className="col-lg-4 col-md-6 col-12 p-3 mt-4">
          <img src="/media/images/dittoLogo.png" className="img-fluid" style={{ width: "60%" }} />
          <p className="small text-muted">Insurance platform</p>
        </div>
        <div className="mt-5">
      <button className="btn btn-primary btn-lg px-5">
        Signup
      </button>
    </div>
      </div>
    </div>
  )
}

export default Universe