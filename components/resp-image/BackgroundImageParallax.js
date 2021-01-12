import { useRef, useEffect } from "react";

export default function BackgroundImageParallax({ image, children, alt }) {
  let imageRef = useRef();
  function imageLoaded() {
    let imagePlaceholder = imageRef.current.getElementsByClassName(
      "bg-image"
    )[0];
    imagePlaceholder.classList.add("loaded");
  }
  useEffect(() => {
    let imagePlaceholder = imageRef.current.getElementsByClassName(
      "bg-image"
    )[0];
    let image = imageRef.current.getElementsByClassName("onload")[0];
    if (image.complete) {
      imagePlaceholder.classList.add("loaded");
    }
  }, []);
  return (
    <>
      <div
        ref={imageRef}
        className="relative flex flex-col items-center justify-center w-screen min-h-screen nnn12"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            style={{
              backgroundImage: `url("${image.placeholder}")`,
            }}
            className={`bg-image w-full h-full z-10 delay-200`}
          ></div>
        </div>
        <picture className="absolute top-0 left-0 w-full h-full select-none">
          <source srcSet={image.srcset} type="image/jpeg" />
          <img
            loading="lazy"
            onLoad={() => imageLoaded()}
            className="object-cover w-full h-full onload"
            src={image.src}
            style={{ transform: "scaleY(2)" }}
            alt={alt ? alt : ""}
          />
        </picture>
        {children}
      </div>
      <style jsx>{`
        .nnn12 {
          will-change: auto;
          transform: translate3d(0);
          backface-visibility: hidden;
          position: sticky;
          top: 50%;
        }
        @media not all and (min-resolution: 0.001dpcm) {
          @supports (-webkit-appearance: none) {
            .nnn12 {
              top: 0;
              transform: translateY(150vh);
            }
          }
        }
      `}</style>
    </>
  );
}
