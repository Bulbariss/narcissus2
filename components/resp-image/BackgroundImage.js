import { useRef, useEffect } from "react";

export default function BackgroundImage({ image, children, alt, className }) {
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
      <div ref={imageRef} className={`relative w-screen ${className}`}>
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
            onLoad={() => imageLoaded()}
            className="object-cover w-full h-full onload"
            src={image.src}
            alt={alt ? alt : ""}
          />
        </picture>
        {children}
      </div>
    </>
  );
}
