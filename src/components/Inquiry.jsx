import React from 'react'

const Inquiry = () => {
  return (

    <section className="inquiry-section">

      <div className="container">

        <div className="form-container text-center">

          <div className="form-header">

            <h2>Start Your Story</h2>

            <p>
              Allow our curators to help you design an unforgettable afternoon.
            </p>

          </div>

          <form className="text-start">

            <div className="row g-4">

              {/* FULL NAME */}

              <div className="col-md-6">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Elizabeth Sterling"
                />

              </div>

              {/* EMAIL */}

              <div className="col-md-6">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="e.sterling@lifestyle.com"
                />

              </div>

              {/* DATE */}

              <div className="col-md-6">

                <label className="form-label">
                  Planned Date
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Oct 14, 2024"
                />

              </div>

              {/* GUEST COUNT */}

              <div className="col-md-6">

                <label className="form-label">
                  Guest Count
                </label>

                <select
                  className="form-select"
                  defaultValue="8 - 12 Guests"
                >

                  <option>
                    8 - 12 Guests
                  </option>

                  <option value="2-4">
                    2 - 4 Guests
                  </option>

                  <option value="5-7">
                    5 - 7 Guests
                  </option>

                  <option value="13+">
                    13+ Guests
                  </option>

                </select>

              </div>

              {/* TEXTAREA */}

              <div className="col-12">

                <label className="form-label">
                  Additional Details or Theme Requests
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Share your vision with us..."
                ></textarea>

              </div>

            </div>

            {/* BUTTON */}

            <div className="text-center mt-4">

              <button
                type="submit"
                className="btn-submit"
              >
                Submit Inquiry
              </button>

              <p className="footer-note">
                Our concierge will reach out within 24 hours.
              </p>

            </div>

          </form>

        </div>

      </div>

    </section>

  )
}

export default Inquiry