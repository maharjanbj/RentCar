import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <section>
      <div className="gallery">
        <h1>Car Gallery</h1>
        <div className="gallery_container">
          <div className="gallery_box">
            <img src="./img/hyundai.png" alt="" />
          </div>
          <div className="gallery_box">
            <img src="./img/kia.jpg" alt="" />
          </div>
          <div className="gallery_box">
            <img src="./img/suzuki.jpg" alt="" />
          </div>
          <div className="gallery_box">
            <img src="./img/toyota.jpg" alt="" />
          </div>
          <div className="gallery_box">
            <img src="./img/tesla.webp" alt="" />
          </div>
          <div className="gallery_box">
            <img src="./img/hyundai2.jpg" alt="" />
          </div>
        </div>
        <button>See More</button>
      </div>
    </section>
  );
};

export default Gallery;
