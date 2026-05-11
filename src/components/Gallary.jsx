import React from 'react'

import gal1 from '../assets/Gal_1.jpg'
import gal2 from '../assets/Gal_2.jpg'
import gal3 from '../assets/Gal-3.jpg'
import gal4 from '../assets/Gal_4.jpg'
import gal5 from '../assets/Gal_5.jpg'
import gal6 from '../assets/Gal_6.png'

const galleryImages = [
  {
    img: gal1,
    className: 'card-tall'
  },
  {
    img: gal2,
    className: 'card-tall'
  },
  {
    img: gal3,
    className: 'card-tall'
  },
  {
    img: gal4,
    className: 'card-medium'
  },
  {
    img: gal5,
    className: 'card-medium'
  },
  {
    img: gal6,
    className: 'card-medium'
  }
]

const Gallary = () => {
  return (
    <section className="gallery-section">

      <div className="gallery-container">

        <h2 className="gallery-title">
          The Nature Stays Experience
        </h2>

        <div className="gallery-grid">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`gallery-card ${item.className}`}
            >
              <img
                src={item.img}
                alt={`Gallery ${index + 1}`}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Gallary