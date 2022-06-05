import React from 'react';
import './Button.css';

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === 'next' ? 'o-carousel--next next' : 'o-carousel--prev prev'
      }
    >
      {direction === 'next' ? 'Next' : 'Prev'}
    </button>
  );
}
