import React from "react";

const Parallax = ({ image }) => {
  return (
    <div className="bbb">
      <div className="bbb2">
        <div className="ttt">
          <div className="nnn" style={{ backgroundImage: `url(${image})` }} />
        </div>
      </div>
      <style jsx>
        {`
          .bbb2 {
            height: 100%;
            background: #f6f5f4;
            position: initial;
          }
          .bbb {
            height: 100vh;
            background: #f6f5f4;
            position: relative;
            z-index: -1;
          }
          .ttt {
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            height: 600vh;
            width: 100%;
            background: #000;
            position: absolute;
            top: 0;
            margin-top: -300vh;
            /*   z-index: 1222; */
          }

          .nnn {
            height: 200vh;
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            background-size: 100vmax 250vmax;
            background-position: center;
          }

          @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
              .ttt {
                margin-top: -100vh;
              }

              .nnn {
                background-size: 100vmax 500vmax;
                height: 400vh;
                top: -150vh;
                margin-top: -150rem;
                transform: scaleY(0.5);
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Parallax;
