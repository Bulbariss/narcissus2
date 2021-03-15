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
      el.current.style.transform = `translateY(${
        (calculateVerticalPercentage(el.current) - 0.5) * 100
      }%)`;

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
    <div
      ref={ref}
      className="relative w-full min-h-screen overflow-x-visible space-holder"
    >
      <div className="sticky top-0 w-screen h-screen overflow-hidden stickyContainer">
        <div ref={el} className="horizontal"></div>
      </div>
      <style jsx>{`
        .horizontal {
          background-image: url(${image});
          background-size: 100vmax 125vmax;
          background-position: center;
          will-change: transform;
          margin-top: -50vh;
          height: 200vh;
          width: 100vw;
          position: absolute;
          top: 0;
        }
      `}</style>
    </div>
  );
};

export default ParallaxImage;
