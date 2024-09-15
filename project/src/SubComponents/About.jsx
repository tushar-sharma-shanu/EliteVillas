import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          At Elite Heaven we specialize in offering exceptional luxury rentals that redefine comfort and elegance. Each of our handpicked properties combines style, privacy, and world-class amenities, ensuring an unforgettable stay in some of the world’s most sought-after destinations
          </p>
    
          <p>
          Our commitment to personalized service goes beyond just providing a place to stay. From tailored concierge services to exclusive local experiences, we strive to make every moment of your journey extraordinary.
          </p>
          <p>
          Discover the art of luxurious living with us —where your perfect escape awaits.
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
