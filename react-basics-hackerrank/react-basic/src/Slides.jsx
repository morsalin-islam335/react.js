/* eslint-disable react/prop-types */
import { useState } from "react";

function Slides({ slides }) {
  const [index, setIndex] = useState(0);
  const [presentSlide, setPresentSlide] = useState(slides[0] || {});
  const handleRest = () => {
    setIndex(() => 0);
    setPresentSlide(() => slides[0]);
  };

  const handleNext = () => {
    setPresentSlide(() => slides[index + 1]);
    setIndex(() => index + 1);
  };

  const handlePrev = () => {
    setPresentSlide(() => slides[index - 1]);
    setIndex(() => index - 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={index == 0}
          onClick={handleRest}
          data-testid="button-restart"
          className="small outlined"
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          disabled={index == 0}
          onClick={handlePrev}
          className="small"
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          disabled={index + 1 == slides.length}
          onClick={handleNext}
          className="small"
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{presentSlide?.title}</h1>
        <p data-testid="text">{presentSlide?.text}</p>
      </div>
    </div>
  );
}

export default Slides;
