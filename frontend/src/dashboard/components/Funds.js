import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="dashboard-funds">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <Link to="#" className="dashboard-btn dashboard-btn-green">
          Add Funds
        </Link>

        <Link to="#" className="dashboard-btn dashboard-btn-blue">
          Withdraw
        </Link>
      </div>

      <div className="dashboard-row">
        <div className="dashboard-col">
          <span>
            <p>Equity</p>
          </span>

          <div className="dashboard-table">
            <div className="dashboard-data">
              <p>Available Margin</p>
              <p className="dashboard-imp dashboard-colored">
                4,043.10
              </p>
            </div>

            <div className="dashboard-data">
              <p>Used Margin</p>
              <p className="dashboard-imp">
                3,757.30
              </p>
            </div>

            <div className="dashboard-data">
              <p>Available Cash</p>
              <p className="dashboard-imp">
                4,043.10
              </p>
            </div>

            <hr />

            <div className="dashboard-data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>

            <div className="dashboard-data">
              <p>Opening Balance</p>
              <p>3,736.40</p>
            </div>

            <div className="dashboard-data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>

            <div className="dashboard-data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>

            <div className="dashboard-data">
              <p>Delivery Margin</p>
              <p>0.00</p>
            </div>

            <div className="dashboard-data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>

            <div className="dashboard-data">
              <p>Options Premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="dashboard-data">
              <p>Collateral (Liquid Funds)</p>
              <p>0.00</p>
            </div>

            <div className="dashboard-data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>

            <div className="dashboard-data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="dashboard-col">
          <div className="dashboard-commodity">
            <p>You don't have a commodity account.</p>

            <Link
              to="#"
              className="dashboard-btn dashboard-btn-blue"
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;