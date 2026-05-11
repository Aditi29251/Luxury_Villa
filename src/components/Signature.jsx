import React from 'react'

import villa1 from '../assets/istockphoto-1029961984-1024x1024.jpg'
import villa2 from '../assets/pexels-curtis-adams-1694007-16501696.jpg'

const Signature = () => {

  const properties = [
    {
      id: 1,
      image: villa1,
      title: "Hillcrest Haven",
      features: "Skyline Views • Infinity Pool • Open Terrace",
      link: "/properties/hillcrest-haven",
      featured: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      title: "Mist Villa",
      features: "Garden Courtyard • Tropical Flora • Private Spa",
      link: "/properties/mist-villa",
      featured: false,
    },
    {
      id: 3,
      image: villa2,
      title: "Garden Estate",
      features: "Manicured Lawns • Rose Garden • Grand Dining",
      link: "/properties/garden-estate",
      featured: false,
    },
  ];

  return (

    <section className='container-1'>

      <div className="container">

        <div className="row header-section align-items-end">

          <div className="col-md-8">

            <h2>Signature Estates</h2>

            <p className="header-text">
              Curated properties selected specifically for their hosting potential and
              stunning vistas.
            </p>

          </div>

          <div className="col-md-4 text-md-end text-start">

            <a href="/estates" className="view-all-link">
              View All Estates
            </a>

          </div>

        </div>

        <div className="row gx-4">

          {properties.map((property) => (

            <div className="col-md-4 property-card" key={property.id}>

              <div className="img-wrapper">

                {property.featured && (
                  <div className="featured-badge">
                    Featured
                  </div>
                )}

                <img
                  src={property.image}
                  alt={property.title}
                  className="img-fluid"
                />

              </div>

              <h3 className="property-title">
                {property.title}
              </h3>

              <p className="property-features">
                {property.features}
              </p>

              <a href={property.link} className="explore-link">
                Explore Property
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Signature