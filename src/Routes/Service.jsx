import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";
import "./Service.css";

const service = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div id="service">
        <div className="service">
          <h1>Our Services</h1>
          <div className="service_container">
            <div className="service_box">
              <img src="./img/swift.webp" alt="" height="100%" width="100%" />
            </div>
            <div className="service_box">
              <b>Swift</b>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio assumenda minus facere repudiandae repellat natus,
                iste amet quia porro, dolorum nihil fugit ipsum at molestiae
                deleniti! Ipsam reiciendis tempore quod?
              </p>
              <br />
              <button>Learn More</button>
            </div>

            <div className="service_box">
              <b>Fortuner</b>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio assumenda minus facere repudiandae repellat natus,
                iste amet quia porro, dolorum nihil fugit ipsum at molestiae
                deleniti! Ipsam reiciendis tempore quod?
              </p>
              <br />
              <button>Learn More</button>
            </div>
            <div className="service_box">
              <img
                src="./img/fortuner.webp"
                alt=""
                height="100%"
                width="100%"
              />
            </div>

            <div className="service_box">
              <img src="./img/scorpio.webp" alt="" height="100%" width="100%" />
            </div>
            <div className="service_box">
              <b>Scorpio</b>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio assumenda minus facere repudiandae repellat natus,
                iste amet quia porro, dolorum nihil fugit ipsum at molestiae
                deleniti! Ipsam reiciendis tempore quod?
              </p>
              <br />
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default service;
