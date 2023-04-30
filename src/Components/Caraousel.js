import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Components/Caraousel.css";


function Caraousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2015/08/28/08/06/petronas-911580_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="division">
            <button className="travel">Remember that happiness is a way of travel, not a destination</button>
          </div>
          <h3>Choose Your Destination</h3>
          <p>“The journey of a thousand miles begins with a single step.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>“Jobs fill your pockets, adventures fill your soul.”</h1>
          <h3>Choose Your Destination</h3>
          <p>“The journey of a thousand miles begins with a single step.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          
        <h1>“Jobs fill your pockets, adventures fill your soul.”</h1>
          <h3>Choose Your Destination</h3>
          <p>“The journey of a thousand miles begins with a single step.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197_960_720.jpg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          
          <h3>Choose Your Destination</h3>
          <p>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Caraousel;
