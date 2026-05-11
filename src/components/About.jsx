import about1 from '../assets/about_1.jpg';
import about2 from '../assets/about_2.jpg';

function About() {
    return (
        <section className="luxury-section">

            <div className="container">

                <div className="row align-items-center">

                    {/* LEFT IMAGES */}

                    <div className="col-lg-6">

                        <div className="image-stack">

                            <img
                                src={about1}
                                alt="Luxury Stay"
                                className="main-img"
                            />

                            <div className="overlap-img-wrapper">

                                <img
                                    src={about2}
                                    alt="Celebration"
                                    className="overlap-img"
                                />

                            </div>

                        </div>

                    </div>

                    {/* RIGHT CONTENT */}

                    <div className="col-lg-6 luxury-content">

                        <h1 className="display-4">
                            Your Circle Deserves Extraordinary
                        </h1>

                        <div className="content-text">

                            <p>
                                At Kaz Stay, we believe that the monthly gathering of your closest circle should
                                be more than just a meeting—it should be a curated escape. We transform the traditional
                                kitty party into a sophisticated lifestyle experience, blending the privacy of our exclusive
                                villas with bespoke hospitality services.
                            </p>

                            <p>
                                From themed floral installations that mirror the local flora to chef-curated
                                menus that cater to refined palates, every detail is orchestrated to ensure your only focus
                                is the conversation.
                            </p>

                        </div>

                        <div className="line-wrapper">

                            <div className="line"></div>

                            <span className="line-text">
                                The Art of Fine Hosting
                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;