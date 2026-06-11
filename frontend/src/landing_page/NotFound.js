import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='container py-5'>
      <div className='row justify-content-center text-center'>

        <div className='col-lg-8 col-md-10 col-12'>

          <h1 className='fw-bold mt-5 mb-3'>
            Page Not Found
          </h1>

          <p className='text-muted mb-4'>
            The page you are looking for does not exist.
          </p>

          <Link
            to="/"
            className='btn btn-primary btn-lg px-5'
          >
            Go to Homepage
          </Link>

        </div>

      </div>
    </div>
  );
}

export default NotFound;