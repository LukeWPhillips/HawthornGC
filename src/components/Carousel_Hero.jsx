import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/jpg/img-9.jpg";
import Image2 from "../assets/jpg/img-2.jpg";
import Image3 from "../assets/jpg/img-4.jpg";
import Image4 from "../assets/jpg/img-8.jpg";

function ImageCarousel() {
  return (
    <Carousel
      className="carousel"
      showThumbs={false}
      autoPlay={true}
      interval={5000}
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={false}
      showIndicators={false}
    >
      <div>
        <img src={Image1} />
      </div>
      <div>
        <img src={Image2} />
      </div>
      <div>
        <img src={Image3} />
      </div>
      <div>
        <img src={Image4} />
      </div>
    </Carousel>
  );
}

export default ImageCarousel;
