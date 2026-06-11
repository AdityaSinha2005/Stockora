import React from 'react'

function Hero() {
  return (
    <div className='container'>

      <div className='row mt-5 py-5 border-bottom text-center'>
        <h1 className='fw-bold'>Pricing</h1>

        <h3 className='text-muted fs-4 mt-3'>
          Free equity investments and flat ₹20 intraday and F&O trades
        </h3>
      </div>

      <div className='row mt-5 py-5 border-bottom text-center'>

        <div className='col-lg-4 col-md-6 col-12 p-4'>
          <div className='h-100 rounded p-3'>
            <img
              src="/media/images/pricingEquity.svg"
              alt="Free Equity Delivery"
              className="img-fluid mb-4"
            />

            <h3 className='fw-bold'>
              Free equity delivery
            </h3>

            <p className='text-muted'>
              All equity delivery investments (NSE, BSE) are absolutely free –
              ₹0 brokerage.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 p-4'>
          <div className='h-100 rounded p-3'>
            <img
              src="/media/images/intradayTrades.svg"
              alt="Intraday Trades"
              className="img-fluid mb-4"
            />

            <h3 className='fw-bold'>
              Intraday and F&O trades
            </h3>

            <p className='text-muted'>
              Flat ₹20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-12 p-4'>
          <div className='h-100 rounded p-3'>
            <img
              src="/media/images/pricingEquity.svg"
              alt="Free Direct MF"
              className="img-fluid mb-4"
            />

            <h3 className='fw-bold'>
              Free direct MF
            </h3>

            <p className='text-muted'>
              All direct mutual fund investments are absolutely free –
              ₹0 commissions & DP charges.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero;