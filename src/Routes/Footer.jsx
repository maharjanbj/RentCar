import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section class="footer">
      <div class="footer_container">
        <div class="footer_box">
          <h3>about us</h3>
          <p>
            "Mountain Vehicle Nepal, a Kathmandu based vehicle rental company,
            meets all your demands whether you are looking to rent a car for day
            tours, overnight trips or a multi-day tour in Nepal....."
          </p>
        </div>
        <div class="footer_box">
          <h3>branch location</h3>
          <a href="index.html">KATHMANDU</a>
          <a href="index.html">POKHARA</a>
          <a href="index.html">JANAKPUR</a>
        </div>
        <div class="footer_box">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <i class="fas fa-phone">&nbsp;&nbsp;&nbsp;+977 9803164925</i>
            </li>
            <li>
              <i class="fas fa-at">&nbsp;&nbsp;&nbsp;info@rentalcarnepal.com</i>
            </li>
            <li>
              <i class="fas fa-business-time">&nbsp;&nbsp;&nbsp;24/7 Service</i>
            </li>
          </ul>
        </div>
        <div class="footer_box">
          <h3>follow us</h3>
          <a href="index.html">facebook</a>
          <a href="index.html">instagram</a>
          <a href="index.html">twitter</a>
          <a href="index.html">linkedin</a>
        </div>
      </div>
      <hr />
      <h3 class="footer1">rental.com</h3>
    </section>
  );
};

export default Footer;