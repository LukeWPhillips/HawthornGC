import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Carousel_Reviews() {
  return (
    <Carousel
      className="carousel_reviews"
      showThumbs={false}
      autoPlay={true}
      interval={4000}
      infiniteLoop={true}
      showStatus={false}
      dynamicHeight={false}
      showIndicators={true}
      swipeable={true}
      showArrows={false}
    >
      <div>
        <p>
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          commodi veritatis explicabo facere magni voluptate! Eius nesciunt
          nulla provident beatae, rem ex accusantium, dolore alias culpa, eaque
          perspiciatis corporis neque! "
        </p>
      </div>
      <div>
        <p>
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          commodi veritatis explicabo facere magni voluptate! Eius nesciunt
          nulla provident beatae, rem ex accusantium, dolore alias culpa, eaque
          perspiciatis corporis neque! "
        </p>
        <br></br>
        <p>Name Here</p>
      </div>
      <div>
        <p>
          " A friend of mine has been gardening all his working life. I can not
          recomend him enough. He is hard working reliable and competitive.
          Please keep him in mind for you future projects or maintenance needs
          Hawthorn Garden Care "
        </p>
        <br></br>
        <p>Simon Taylor</p>
      </div>
      <div>
        <p>
          " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          commodi veritatis explicabo facere magni voluptate! Eius nesciunt
          nulla provident beatae, rem ex accusantium, dolore alias culpa, eaque
          perspiciatis corporis neque! "
        </p>
        <br></br>
        <p>Name Here</p>
      </div>
    </Carousel>
  );
}

export default Carousel_Reviews;
