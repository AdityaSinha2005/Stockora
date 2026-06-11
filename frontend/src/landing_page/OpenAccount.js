import React from 'react'
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className='container py-5'>
      <div className='row text-center justify-content-center'>

        <div className='col-lg-8 col-md-10 col-12'>
          <h1 className='fw-bold display-6 mb-3'>
            Open a Stockora Account
          </h1>

          <p className='text-muted mb-4'>
            Modern platforms and apps, zero commissions, and flat ₹20 intraday and F&O trades
          </p>

          <Link to="/signup" className='btn btn-primary btn-lg px-5'>
            Signup Now
          </Link>
        </div>

      </div>
    </div>
  );
}

export default OpenAccount;