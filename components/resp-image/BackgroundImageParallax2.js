const Parallax = ({ image }) => {
  return (
    <div className="relative w-screen h-screen -z">
      <div className="ttt">
        <div className="ttt2">
          <div className="nnn">
            {/* <div
              className="nnn2"
              style={{ backgroundImage: `url(${image})` }}
            ></div> */}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .ttt {
            margin-top: -100vh;
            transform: scaleY(0.25);
            height: 200vh;
            width: 100%;
            background: #000;
            position: absolute;
            top: 0;
          }
          .ttt2 {
            height: 100%;
            transform: scaleY(2);
          }

          .nnn {
            width: 100vw;
            height: 400vh;
            top: 0;
          }

          .nnn:after {
            content: "";
            height: 200vh;
            display: block;
            top: 0;
            background-image: url(${image});
            width: 100vw;
            position: sticky;
            will-change: transform;
            transform: translate3d(0);
            backface-visibility: hidden;
            background-size: 100vmax 250vmax;
            background-position: center;
          }

           {
            /* @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
              .ttt {
                transform: scaleY(0.25) translateY(-500vh);
                height: 600vh;
              }

              .nnn {
                height: 100%;
                position: static;
                will-change: transform;
              }

              .nnn:after {
                transform: translateY(100%);
                position: fixed;
              }

              .nnn2 {
                transform: translateY(50%);
              }
            }
          } */
          }

          @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
               {
                /* .ttt {
                margin-top: -50vh;
              }
              */
              }
              .nnn:after {
                transform: translate3d(0) translateY(50%);
                position: fixed;
              }
              .nnn {
                position: fixed;
                transform: translateY(0%);
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Parallax;
