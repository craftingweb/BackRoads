import React from "react";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-1.jpeg" className="tour-img" alt="" />
            <p className="tour-date">august 26th, 2025</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Tibet Adventure</h4>
            </div>
            <p>
              Discover the heart of the Himalayas as you explore breathtaking
              landscapes and immerse yourself in the spiritual essence of Tibet.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                china
              </p>
              <p>6 days</p>
              <p>from $2100</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-2.jpeg" className="tour-img" alt="" />
            <p className="tour-date">october 2nd, 2025</p>
          </div>
          <div className="tour-info">
            <h4>best of java</h4>
            <p>
              Discover the best of Java, where lush jungles, stunning beaches,
              ancient temples, and vibrant culture come together for an
              unforgettable adventure.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                indonesia
              </p>
              <p>11 days</p>
              <p>from $1400</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-3.jpeg" className="tour-img" alt="" />
            <p className="tour-date">november 15th, 2025</p>
          </div>
          <div className="tour-info">
            <h4>explore hong kong</h4>
            <p>
              Immerse yourself in the vibrant energy of Hong Kong, where
              towering skyscrapers meet serene temples, bustling markets, and
              breathtaking harbor views.
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                hong kong
              </p>
              <p>8 days</p>
              <p>from $5000</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src="./images/tour-4.jpeg" className="tour-img" alt="" />
            <p className="tour-date">december 5th, 2025</p>
          </div>
          <div className="tour-info">
            <h4>kenya highlights</h4>
            <p>
              Kenya offers breathtaking highlights, from the vast savannahs of
              the Maasai Mara and Amboseli National Park to the stunning
              coastline
            </p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>{" "}
                kenya
              </p>
              <p>20 days</p>
              <p>from $3300</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tours;
