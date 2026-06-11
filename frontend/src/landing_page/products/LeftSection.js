import React from 'react'

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
  return (
    <div className='container mt-4'>
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-12">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-lg-4 mt-3">
          <h2 className="fw-bold mb-3">{productName}</h2>
          <p className="mb-5">{productDescription}</p>
          <div className="d-flex flex-wrap gap-2">
            {tryDemo && (
              <a href={tryDemo} className="btn btn-primary">
                Try Demo
              </a>
            )}
            <a href={learnMore} className="btn btn-secondary me-2">Learn More</a>
            <a href={googlePlay} ><img src="/media/images/googlePlayBadge.svg"  alt="Google Play" className="img-fluid"/></a>
            <a href={appStore} ><img src="/media/images/appStoreBadge.svg"  alt="App Store" className="img-fluid"/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSection