import React from "react";
import { Carousel } from "react-bootstrap";

const Gallery = ({ picture }) => {
  return (
    <div className="gallery">
      <Carousel>
        {picture.map((pics) => {
          return (
            <Carousel.Item>
              <div
                className="picture"
                style={{
                  background: `url(${pics})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Gallery;
