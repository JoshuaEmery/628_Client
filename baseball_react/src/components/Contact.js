import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid bg-light p-5">
      <div className="container">
        <h1 className="display-5 text-primary text-center mb-5">Contact Us</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-secondary">
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-secondary">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label text-secondary">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              placeholder="Enter subject"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label text-secondary">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            This doesn't work yet
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
