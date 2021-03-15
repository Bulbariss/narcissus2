import React, { useEffect, useRef } from "react";
import useIntersect from "../utils/useIntersect";
import { calculateVerticalPercentage } from "../utils/getViewportPercentage";

const ParallaxImage = ({ image }) => {
  const [ref, entry] = useIntersect({
    threshold: 0,
  });
  let el = useRef();
  let waiting = false;
  function getPercent() {
    if (!waiting) {
      el.current.style.transform = `translateY(${(
        (calculateVerticalPercentage(el.current) - 0.5) *
        100
      ).toFixed(2)}%)`;

      waiting = true;
      setTimeout(function () {
        waiting = false;
      }, 12);
    }
  }

  useEffect(() => {
    if (entry.isIntersecting) {
      document.addEventListener("scroll", getPercent);
    } else {
      document.removeEventListener("scroll", getPercent);
    }

    return () => {
      document.removeEventListener("scroll", getPercent);
    };
  }, [entry]);

  return (
    <div ref={ref} className="relative w-screen h-screen overflow-hidden">
      <div
        ref={el}
        className="absolute top-0 w-screen bg-center bg-cover vertical"
      ></div>
      <style jsx>{`
        .vertical {
          background-image: url(${image});
          will-change: transform;
          transform: translate3d(0);
          backface-visibility: hidden;
          margin-top: -50vh;
          height: 200vh;
        }
      `}</style>
    </div>
  );
};

export default ParallaxImage;
