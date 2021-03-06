const Parallax = ({ image }) => {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute bbb">
        <div className="bbb2">
          <div className="ttt">
            <div className="ttt2">
              <div className="nnn">
                <div className="nnn2"></div>
              </div>
            </div>
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
            position: relative;
            z-index: -1;
          }
          .ttt {
            margin-top: -100vh;
            transform: scaleY(0.25);
            height: 200vh;
            width: 100%;
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
            position: fixed;
            will-change: transform;
            top: 0;
          }
          .nnn2 {
            height: 200vh;
            width: 100vw;
            position: sticky;
            will-change: transform;
            top: 0;
            background-image: url(${image});
            background-size: 100vmax 250vmax;
            background-position: center;
          }
          @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
              .ttt {
                transform: scaleY(0.25) translateY(-200vh);
                height: 600vh;
                margin-top: -200vh;
              }
              .nnn {
                height: 200%;
              }
              .nnn2 {
                transform: translateY(50%);
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Parallax;
