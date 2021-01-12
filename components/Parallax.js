import React from "react";
import BackgroundImageParallax from "./resp-image/BackgroundImageParallax";

const Parallax = ({ image }) => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute bbb">
        <div className="bbb2">
          <div className="ttt">
            <BackgroundImageParallax image={image} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .bbb2 {
            height: 100%;
            position: initial;
          }
          .bbb {
            height: 100vh;
            z-index: -1;
          }
          .ttt {
            transform: scaleY(0.5);
            height: 600vh;
            margin-top: -300vh;
          }

          @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
              .ttt {
                transform: scaleY(0.5) translateY(-50%);
                margin-top: -100vh;
                top: 0;
                position: absolute;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Parallax;
