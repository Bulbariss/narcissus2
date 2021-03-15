import React, { useEffect } from "react";
import useIntersect from "../utils/useIntersect";

const Parallax = ({ image }) => {
  const [ref, entry] = useIntersect({
    threshold: 0,
  });
  const st = "scrollTop",
    sh = "scrollHeight";
  let waiting = false; // Initially, we're not waiting
  function getPercent() {
    // We return a throttled function

    if (!waiting) {
      // If we're not waiting
      let horizontal = document?.querySelector(".horizontal");
      let percent =
        ((document.documentElement[st] || document.body[st]) /
          ((document.documentElement[sh] || document.body[sh]) -
            document.documentElement.clientHeight)) *
        100;
      //   setPer(percent * 0.3);
      horizontal.style.transform = `translateY(${(percent - 50) * 0.3}%)`;

      waiting = true; // Prevent future invocations
      setTimeout(function () {
        // After a period of time
        waiting = false; // And allow future invocations
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
        <div className="horizontal"></div>
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

export default Parallax;
