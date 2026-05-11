import React from 'react'

const Footer = () => {
  return (
    <div>

      <footer>

        <div className="container">

          <div className="row gx-5">

            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">

              <span className="footer-brand">
                Nature Stay
              </span>

              <p className="footer-desc">
                Defining the next chapter of luxury villa living through curated experiences and architectural masterpieces.
              </p>

            </div>

            <div className="col-lg-2 col-md-4 mb-4">

              <h6 className="footer-heading">
                Discovery
              </h6>

              <ul className="footer-links">

                <li>
                  <a href="/villas">Villas</a>
                </li>

                <li>
                  <a href="/collections">Collections</a>
                </li>

                <li className="active">
                  <a href="/celebrations">Celebrations</a>
                </li>

              </ul>

            </div>

            <div className="col-lg-3 col-md-4 mb-4">

              <h6 className="footer-heading">
                Company
              </h6>

              <ul className="footer-links">

                <li>
                  <a href="/sustainability">Sustainability</a>
                </li>

                <li>
                  <a href="/accessibility">Accessibility</a>
                </li>

                <li>
                  <a href="/journal">Journal</a>
                </li>

              </ul>

            </div>

            <div className="col-lg-3 col-md-4 mb-4">

              <h6 className="footer-heading">
                Legal
              </h6>

              <ul className="footer-links">

                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>

                <li>
                  <a href="/terms-of-service">Terms of Service</a>
                </li>

                <li>
                  <a href="/cookie-policy">Cookie Policy</a>
                </li>

              </ul>

            </div>

          </div>

          <div className="row copyright-row">

            <div className="col-12">

              <p>
                © 2024 Nature Stay Luxury Rentals. All rights reserved.
              </p>

            </div>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default Footer