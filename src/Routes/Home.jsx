import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Gallery from "./Gallery";
import Contact from "../Components/contact";
import Footer from "./Footer";
import About from "../Components/about";

const Home = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div id="home">
        <div className="home">
          <div className="secContainer container">
            <div className="homeText">
              <h1 className="title">Plan Your Trip With Rent Car</h1>
              <p className="subTitle">Rent Car with affordable price!</p>
              <button> Eplore Now</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
