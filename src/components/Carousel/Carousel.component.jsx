import React from "react";
import "antd/dist/antd.css";
import "./Carousel.styles.scss";
import ImageGallery from "react-image-gallery";

// Images
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img1Thumbnail from "../../assets/img1Thumbnail.jpeg";
import img2Thumbnail from "../../assets/img2Thumbnail.jpeg";
import img3Thumbnail from "../../assets/img3Thumbnail.jpeg";
import img4Thumbnail from "../../assets/img4Thumbnail.jpeg";

const CarouselComponent = () => {
  const images = [
    {
      original: img1,
      thumbnail: img1Thumbnail,
      originalAlt: "img1",
      thumbnailAlt: "img1Thumbnail",
    },
    {
      original: img2,
      thumbnail: img2Thumbnail,
      originalAlt: "img1",
    },
    {
      original: img3,
      thumbnail: img3Thumbnail,
      originalAlt: "img1",
    },
    {
      original: img4,
      thumbnail: img4Thumbnail,
      originalAlt: "img1",
    },
  ];
  return (
    <div className="carousel-container">
      <ImageGallery items={images} className="carousel" autoPlay />
    </div>
  );
};

export default CarouselComponent;
