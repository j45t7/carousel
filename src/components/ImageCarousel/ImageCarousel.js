import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import { images } from '../../assets/images-data';
import Button from '../Button/Button.jsx';
import CarouselDescription from '../CarouselDescription/CarouselDescription.jsx';

function ImageSlider() {
  const [imageData, setImageData] = useState(images[0]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        nextSlide();
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handleThumbnailClick = (index) => {
    const image = images[index];
    setImageData(image);
  };

  const nextSlide = () => {
    if (imageData.id !== images.length) {
      setImageData(images[imageData.id]);
    } else if (imageData.id === images.length) {
      setImageData(images[0]);
    }
  };

  const prevSlide = () => {
    if (imageData.id === 1) {
      setImageData(images[images.length - 1]);
    } else if (imageData.id !== 1) {
      setImageData(images[imageData.id - 2]);
    }
  };

  return (
    <>
      <div className='container--grid'>
        <CarouselDescription />
        <div
          className='o-carousel'
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className='o-carousel--item'>
            <img
              src={imageData.image}
              height='500'
              width='850'
              alt={imageData.description}
            />
            <div className='o-carousel--number'>
              <p className='o-carousel--current'>{imageData.id}</p>
              <div className='o-carousel--line'>/</div>
              <p className='o-carousel--last'>{images.length}</p>
            </div>
          </div>
          <div className='o-carousel--caption'>
            <p className='o-carousel--caption-text'>{imageData.description}</p>
            <div className='btns'>
              <Button moveSlide={prevSlide} direction={'prev'} />
              <div className='line'></div>
              <Button moveSlide={nextSlide} direction={'next'} />
            </div>
          </div>
        </div>
      </div>
      <div className='o-carousel--row'>
        {images.map((data, i) => (
          <div className='o-carousel--thumbnail' key={data.id}>
            <img
              className={imageData.id === i + 1 ? 'active' : ''}
              src={data.image}
              onClick={() => handleThumbnailClick(i)}
              height='120'
              width='200'
              alt={data.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ImageSlider;
