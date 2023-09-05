import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "SlideShow/1.jpg",
    "SlideShow/2.jpg",
    "SlideShow/3.jpg",
    "SlideShow/4.jpg",
    "SlideShow/5.jpg",
    "SlideShow/6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlideshowRunning, setIsSlideshowRunning] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const startSlideshow = () => {
    setIsSlideshowRunning(true);
  };

  const stopSlideshow = () => {
    setIsSlideshowRunning(false);
  };

  React.useEffect(() => {
    let slideshowTimer;

    if (isSlideshowRunning) {
      slideshowTimer = setInterval(goToNext, 3000);
    }

    return () => {
      clearInterval(slideshowTimer);
    };
  }, [currentIndex, isSlideshowRunning]);

  return (
    <div>
      <h2>Image Slider</h2>
      <div>
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      </div>
      <div>
        <button onClick={goToPrevious}>Previous</button>
        {!isSlideshowRunning ? (
          <button onClick={startSlideshow}>Start Slideshow</button>
        ) : (
          <button onClick={stopSlideshow}>Stop Slideshow</button>
        )}
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
