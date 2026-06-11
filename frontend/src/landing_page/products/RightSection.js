import React from 'react'

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className='container mt-5'>
      <div className="row align-items-center">

        <div className="col-lg-6 col-md-6 col-12 mt-lg-4 mt-3">

          <h2 className="fw-bold mb-3">
            {productName}
          </h2>

          <p className="mb-4">
            {productDescription}
          </p>

          <div>
            <a
              href={learnMore}
              className="btn btn-secondary"
            >
              Learn More
            </a>
          </div>

        </div>

        <div className="col-lg-6 col-md-6 col-12">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  )
}

export default RightSection;