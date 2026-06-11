import React from 'react'

function Brokerage() {
  return (
    <div className='container'>

      <div className='row mt-5 py-5 border-top'>

        <div className='col-lg-8 col-md-12 col-12 p-4 text-start'>
          <h3 className="fw-bold mb-4">Brokerage calculator</h3>

          <ul
            className='text-muted fs-6'
            style={{ lineHeight: "1.8" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
            </li>

            <li>
              Digital contract notes will be sent via e-mail.
            </li>

            <li>
              Physical copies of contract notes, if required, shall be charged ₹20 per contract note.
              Courier charges apply.
            </li>

            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>

            <li>
              If the account is in debit balance, any order placed will be charged ₹40
              per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>

        <div className='col-lg-4 col-md-12 col-12 p-4 text-center'>
          <h3 className="fw-bold mb-4">List of charges</h3>

          <p className="text-muted">
            View detailed brokerage and statutory charges.
          </p>

          <a
            href="#"
            className="text-decoration-none"
          >
            View Charges <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Brokerage;