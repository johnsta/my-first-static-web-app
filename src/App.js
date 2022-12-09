import React from 'react';
import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";

const App = () => {
  const images = [
    { url: "1.jpeg" },
    { url: "5.jpg" },
    { url: "6.jpg" },
  ];

  return <Slider autoPlay={false} imageList={images} width={800} height={800} />;
}

export default App