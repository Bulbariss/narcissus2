import React, { useState } from "react";
import ReactPlayer from "react-player";
import Vid from "../public/images/main.mp4";
import BackgroundImage from "../components/resp-image/BackgroundImage";
import useIntersect from "../components/utils/useIntersect";
import Cover from "../public/images/cover.jpg";

const Video = ({ image }) => {
  const [ref, entry] = useIntersect({
    threshold: 0.7,
  });
  const [ready, setReady] = useState(false);
  const [play, setPlay] = useState(false);

  return (
    <div ref={ref}>
      <BackgroundImage
        // className={`relative w-screen z-10`
        // Tag="div"
        // alt="Обложка"
        image={image}
        // fadeIn="soft"
        // durationFadeIn={300}
      >
        <ReactPlayer
          id="react-player"
          className={"react-player"}
          onReady={() => setReady(true)}
          playing={entry.isIntersecting && ready && play}
          url={Vid}
          height={"auto"}
          width={"auto"}
          playsinline
          autoPlay={false}
          style={{ margin: "auto" }}
        />
        {!play && (
          <div
            className="absolute top-0 z-20 w-full h-full bg-cover video-cover"
            style={{ backgroundImage: `url(${Cover})` }}
          >
            <button
              className="absolute center-xy"
              aria-label="Включить видео"
              onClick={() => setPlay(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cf0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ top: "50%" }}
                className="w-12 h-12 m-auto"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        )}
      </BackgroundImage>
    </div>
  );
};
Video.displayName = "Video";

export default Video;
