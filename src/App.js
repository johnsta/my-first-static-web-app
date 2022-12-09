import React from 'react';
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const App = () => {
  const images = [
    { url: "1.jpeg" },
    { url: "2.jpeg" },
    { url: "3.jpeg" },
    { url: "4.jpeg" },
  ];

  return <Slider autoPlay={false} imageList={images} width={800} height={800} />;
}

export default App