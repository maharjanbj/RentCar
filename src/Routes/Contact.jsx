import React from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="contact">
        <div className="contact_container">
          <h1>Contact US</h1>
          <form>
            <label>Name:</label>
            <br />
            <input type="text" placeholder="Enter Your Name" />
            <br />
            <label>Email:</label>
            <br />
            <input type="text" placeholder="Enter Your Email" />
            <br />
            <label>Subject:</label>
            <br />
            <input type="text" placeholder="" />
            <br />
            <label>Message:</label>
            <br />
            <input type="textarea" className="textarea" />
            <br />
            <br />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
