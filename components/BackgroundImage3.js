import { useRef } from "react";

export default function BackgroundImage({ image, children, alt }) {
  let imageRef = useRef();
  let img = require(`../images/${image}?resize`);
  function imageLoaded() {
    console.log("object");
    let imagePlaceholder = imageRef.current.getElementsByClassName(
      "bg-image"
    )[0];
    imagePlaceholder.classList.add("loaded");
  }
  return (
    <>
      <div
        ref={imageRef}
        className="relative flex flex-col items-center justify-center w-screen min-h-screen"
      >
        {/* <Image
          layout="fill"
          quality={75}
          objectFit="cover"
          src={image}
          alt=""
          className="select-none test123 -z"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            style={{
              backgroundImage: `url("${img.placeholder}")`,
            }}
            className={`bg-image w-full h-full z-10 delay-200`}
          ></div>
        </div>
        <picture onLoad={() => imageLoaded()}>
          <source srcSet={img.srcSet} type="image/jpeg" />
          <img src={img.src} alt={alt ? alt : ""} />
        </picture>
        {children}
      </div>
    </>
  );
}
