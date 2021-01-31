const Parallax = ({ image }) => {
  return (
    <div className="relative w-screen h-screen -z">
      <div className="ttt">
        <div className="ttt2">
          <div className="nnn">
            <div
              className="nnn2"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
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

          .nnn2 {
            height: 200vh;
            width: 100vw;
            position: sticky;
            will-change: transform;
            perspective: 1000;
            transform: translate3d(0);
            backface-visibility: hidden;
            top: 0;
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
                position: fixed;
                will-change: transform;
                perspective: 1000;
                transform: translate3d(0);
                backface-visibility: hidden;
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
