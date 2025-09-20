import React from 'react';
import { Helmet } from 'react-helmet';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import educationImg from '../assets/impact/education.jpg';
import clothingImg from '../assets/impact/clothes.jpg';
import foodImg from '../assets/impact/food.jpg';
import '../about.css'

const About = () => {
  const slideImages = [
    { url: educationImg, caption: 'Empowering through Education' },
    { url: clothingImg, caption: 'Clothing for All' },
    { url: foodImg, caption: 'Providing Nutritious Meals' },
  ];

  return (
    <main className="ngo-about">
      <Helmet>
        <title>NGO Empower - About Us</title>
        <meta
          name="description"
          content="Learn about NGO Empower's mission to uplift communities through education, clothing, financial support, and unity-building initiatives."
        />
        <meta
          name="keywords"
          content="NGO Empower, community upliftment, education programs, clothing drives, financial aid, nonprofit"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <h2>About NGO Empower</h2>
        <p>
          At NGO Empower, we are committed to creating lasting change by empowering communities through targeted programs in education, clothing, financial support, and unity-building. Join us in our mission to uplift lives and foster hope.
        </p>
      </section>

      {/* Mission */}
      <section className="mission-vision text-center">
        <div>
          <h3>Our Mission</h3>
          <p>
            To provide accessible education, essential clothing, and financial aid to underserved communities, fostering unity and empowerment for a brighter future.
          </p>
        </div>
      </section>

      {/* Impact Slideshow */}
      <section className="impact-slideshow slideshow-container">
        <h3>Our Work in Action</h3>
        <Slide>
          {slideImages.map((slide, index) => (
            <div key={index} className="each-slide">
              <img src={slide.url} alt={slide.caption} />
              <p>{slide.caption}</p>
            </div>
          ))}
        </Slide>
      </section>

      {/* Impact Metrics */}
      <section className="impact">
        <h3>Our Impact</h3>
        <div className="stats">
          <div>
            <p>1,000+</p>
            <p>People Helped</p>
          </div>
          <div>
            <p>500+</p>
            <p>Clothing Items Distributed</p>
          </div>
          <div>
            <p>₹1,00,000+</p>
            <p>Financial Aid Provided</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta text-center">
        <h3>Get Involved</h3>
        <p>
          Join us in empowering communities. Your support through donations helps us create meaningful change.
        </p>
        <div className="buttons flex justify-center">
          <a href="/donate" className="donate-btn">
            Donate Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
