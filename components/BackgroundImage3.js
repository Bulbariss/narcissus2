import { useRef } from "react";

export default function BackgroundImage({ image, children, alt }) {
  let imageRef = useRef();
  function imageLoaded() {
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
              backgroundImage: `url("${image.placeholder}")`,
            }}
            className={`bg-image w-full h-full z-10 delay-200`}
          ></div>
        </div>
        <picture className="absolute top-0 left-0 w-full h-full">
          <source srcSet={image.srcSet} type="image/jpeg" />
          <img
            onLoad={() => imageLoaded()}
            className="object-cover w-full h-full"
            src={image.src}
            alt={alt ? alt : ""}
          />
        </picture>
        {children}
      </div>
    </>
  );
}
