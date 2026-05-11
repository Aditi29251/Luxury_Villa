import React from 'react'
import serviceImg from '../assets/service_sec.jpg'

const Services = () => {
  return (
    <div>

      <section className="services-section">

        <div className="services-container">

          {/* TITLE */}

          <div className="services-heading">

            <h2>A Full-Service Affair</h2>

            <p>
              EVERYTHING HANDLED, SO YOU CAN DWELL IN THE MOMENT
            </p>

          </div>

          {/* GRID */}

          <div className="services-grid">

            {/* CARD 1 */}

            <div className="service-box cream-card">

              <div className="icon">✧</div>

              <h3>Themed Decor</h3>

              <p>
                Bespoke table scapes and floral installations tailored to
                your preferred aesthetic—from Bohemian Chic to
                Classic Minimalist.
              </p>

              <div className="star-shape">✦</div>

            </div>

            {/* BIG IMAGE CARD */}

            <div className="service-image-box">

              <img
                src={serviceImg}
                alt="Dining"
              />

              <div className="overlay"></div>

              <div className="image-content">

                <h3>Gourmet Spreads</h3>

                <p>
                  Multi-course culinary journeys curated by our in-house chefs,
                  focusing on seasonal ingredients and exquisite presentation.
                </p>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="service-box lavender-card">

              <div className="icon">⌲</div>

              <h3>Artisanal Mocktail Bar</h3>

              <p>
                A personal mixologist crafting refreshing,
                botanically-infused beverages served in premium glassware.
              </p>

            </div>

            {/* CARD 3 */}

            <div className="service-box dark-card">

              <div className="icon">⌘</div>

              <h3>Games & Activities</h3>

              <p>
                Curated activities from modern parlor games to creative
                workshops that spark joy and connection.
              </p>

            </div>

            {/* CARD 4 */}

            <div className="service-box cream-card">

              <div className="icon">❀</div>

              <h3>Spa & Photography</h3>

              <p>
                Relaxing on-site foot massages followed by a professional
                photoshoot to capture every shared smile.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Services