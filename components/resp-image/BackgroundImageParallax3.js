const Parallax = () => {
  return (
    <div className="relative w-screen h-screen -z">
      {/* <div className="ttt">
        <div className="ttt2">
          <div className="nnn">
            <div className="nnn2"></div>
          </div>
        </div>
      </div> */}
      <div className="nnn">
        <div className="nnn2"></div>
      </div>
      <style jsx>
        {`
          .nnn {
            transform: scaleY(0.5) translateY(-50%);
            width: 100vw;
            height: 200vh;
            top: 0;
          }
          .nnn2 {
            transform: scaleY(2) translateY(-25%);
            width: 100vw;
            height: 100vh;
            top: 0;
            position: fixed;
            will-change: transform;
          }

          @media not all and (min-resolution: 0.001dpcm) {
            @supports (-webkit-appearance: none) {
              .nnn2:before {
                content: "";
                display: block;
                width: 100%;
                top: 0;
                height: 100%;
                position: fixed;
                z-index: 9999;
                transform: translateY(0%);
                background-image: url(https://images.pexels.com/photos/4906286/pexels-photo-4906286.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
                background-size: 100vmax 250vmax;
                background-position: center;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export default Parallax;
