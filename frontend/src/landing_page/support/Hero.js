import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="container py-4" id="supportWrapper">
        <h4 className="mb-0">Support Portal</h4>

        <a href="#" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      <div className="row p-lg-5 p-3 m-0">

        <div className="col-lg-6 col-md-6 col-12 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="#" className="text-decoration-none">
              Track account opening
            </a>

            <a href="#" className="text-decoration-none">
              Track segment activation
            </a>

            <a href="#" className="text-decoration-none">
              Intraday margins
            </a>

            <a href="#" className="text-decoration-none">
              Kite user manual
            </a>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12 p-3">
          <h1 className="fs-3 mb-4">
            Featured
          </h1>

          <ol>
            <li className="mb-3">
              <a href="#" className="text-decoration-none">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li>
              <a href="#" className="text-decoration-none">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>

      </div>

    </section>
  );
}

export default Hero;