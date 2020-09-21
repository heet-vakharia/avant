import React from "react";
import "antd/dist/antd.css";
import "./Carousel.styles.scss";
import ImageGallery from "react-image-gallery";

// Images
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const CarouselComponent = () => {
  const images = [
    {
      original: img1,

      originalAlt: "img1",
    },
    {
      original: img2,

      originalAlt: "img2",
    },
    {
      original: img3,

      originalAlt: "img3",
    },
    {
      original: img4,
      originalAlt: "img4",
    },
  ];
  return (
    <div className="carousel-container">
      <h3 className="carousel__heading">
        Some wonderful memories captured during our tours
      </h3>
      <ImageGallery
        items={images}
        className="carousel"
        autoPlay
        lazyLoad
        showPlayButton={false}
        showThumbnails={false}
      />
    </div>
  );
};

export default CarouselComponent;
