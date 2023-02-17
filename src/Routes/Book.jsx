import React from "react";
import Navbar from "../Components/Navbar";
import "./Book.css";
import Footer from "./Footer";

const Book = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div id="book">
        <div className="book">
          <div className="book_container">
            <h1>Booking Online</h1>
            <form>
              <label>Your Name:</label>
              <br />
              <input type="text" />
              <br />
              <label>Your Email:</label>
              <br />
              <input type="text" />
              <br />
              <label>Phone Number:</label>
              <br />
              <input type="text" />
              <br />
              <label>Subject:</label>
              <br />
              <input type="text" />
              <br />
              <label>Your Message:</label>
              <br />
              <input type="text" />
              <br />
            </form>
            <button>Book Now</button>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Book;
