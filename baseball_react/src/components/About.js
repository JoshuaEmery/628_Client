import React from "react";

const About = () => {
  return (
    <div className="container-fluid bg-light p-5">
      <div className="container">
        <h1 className="display-5 text-primary text-center mb-5">
          About the Home Run Derby Projection Model
        </h1>

        <section className="mb-5">
          <h2 className="h4 text-secondary mb-3">
            What is the Home Run Derby Projection Model?
          </h2>
          <p className="text-dark">
            The Home Run Derby Projection Model is a simulation application to
            provide baseball enthusiasts with a platform to analyze and predict
            the outcomes of Home Run Derby events. By leveraging our unique
            model, users can gain insights into the performance of their
            favorite players and make data-driven decisions on their
            predictions.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4 text-secondary mb-3">Who Are We?</h2>
          <p className="text-dark">
            We are a team of passionate baseball fans and data scientists
            committed to bringing the most accurate and engaging experience to
            the baseball community. Our mission is to blend the joy of baseball
            with the power of data analytics.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4 text-secondary mb-3">How Does It Work?</h2>
          <p className="text-dark">
            Our model uses a wide range of variables, including player
            statistics, and historical performance to simulate the outcomes of
            Home Run Derby events.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="h4 text-secondary mb-3">Contact Us</h2>
          <p className="text-dark">
            Got questions or feedback? Feel free to reach out to us at{" "}
            <a href="mailto:ThisDoesntWork@Yet.com">ThisDoesntWork@Yet.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
