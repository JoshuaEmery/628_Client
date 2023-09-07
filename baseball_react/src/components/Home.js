import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>{" "}
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/julio.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/guerrero.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/randy.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/rachman.webp" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/guerrotropy.webp" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid bg-light p-5">
        <div className="container text-center">
          <h1 className="display-5 text-primary">
            Home Run Derby Projection Model
          </h1>
          <p className="lead text-secondary">
            Are you excited about the next Home Run Derby but can't wait to know
            who might win?
          </p>
          <p className="text-dark">
            Our application uses advanced analytics and simulation techniques to
            predict the most likely winners based on numerous factors including
            player stats, environmental variables, and more.
          </p>
          <p className="text-dark">
            Compare your favorite players, analyze their strengths and
            weaknesses, and get an edge over your friends in predicting the next
            Home Run champion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
