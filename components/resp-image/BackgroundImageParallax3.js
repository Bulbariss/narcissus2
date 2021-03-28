import React, { useEffect, useRef } from "react";
import { calculateVerticalPercentage } from "../utils/getViewportPercentage";
import useIntersect from "../utils/useIntersect";

const ParallaxImage = ({ image }) => {
  let el = useRef();
  const [ref, entry] = useIntersect({
    threshold: 0,
  });
  const requestRef = useRef();
  let prev = useRef();
  function getPercent() {
    if (entry.isIntersecting) {
      let pos = ((calculateVerticalPercentage(el.current) - 0.5) * 100).toFixed(
        4
      );
      if (prev.current !== pos) {
        console.log("!");
        prev.current = pos;
        el.current.style.transform = `translateY(${pos}%)`;
      }
      requestRef.current = requestAnimationFrame(getPercent);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
  }

  useEffect(() => {
    if (entry.isIntersecting) {
      requestRef.current = requestAnimationFrame(getPercent);
    } else {
      cancelAnimationFrame(requestRef.current);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [entry]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div ref={ref} className="container absolute top-0">
        <div
          ref={el}
          className="w-screen h-full bg-center bg-cover vertical"
        ></div>
      </div>
      <style jsx>{`
        .vertical {
          background-image: url(${image});
          will-change: transform;
          transform: translate3d(0);
          backface-visibility: hidden;
        }
        .container {
          margin-top: -50vh;
          height: 200vh;
        }
      `}</style>
    </div>
  );
};

export default ParallaxImage;
