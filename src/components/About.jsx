import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="./images/about.jpeg"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            At our core, we believe every city has a story waiting to be told.
            Our guided tours are crafted to bring those stories to life,
            showcasing iconic landmarks, hidden gems, and everything in between.
          </p>
          <p>
            Whether you're a history buff, a culture enthusiast, or an adventure
            seeker, our tours are designed to provide unforgettable experiences
            that match your interests.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
