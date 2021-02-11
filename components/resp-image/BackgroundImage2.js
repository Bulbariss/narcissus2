import Image from "next/image";
import { useRef } from "react";
export default function BackgroundImage({
  image,
  children,
  alt,
  className,
  quality,
}) {
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
        className={`relative w-screen min-h-screen ${className}`}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            style={{
              backgroundImage: `url("/_next/image?url=${image}&w=40&q=75")`,
            }}
            className="z-10 w-full h-full delay-200 bg-image"
          ></div>
        </div>
        {/* <picture className="absolute top-0 left-0 w-full h-full select-none">
          <source srcSet={image.srcset} type="image/jpeg" />
          <img
            loading={loading}
            onLoad={() => imageLoaded()}
            className="object-cover w-full h-full onload"
            src={image.src}
            alt={alt ? alt : ""}
          />
        </picture> */}
        <Image
          onLoad={() => imageLoaded()}
          layout="fill"
          quality={quality || 75}
          objectFit="cover"
          style={{ visibility: "visible" }}
          src={image}
          alt={alt ? alt : "test"}
          className="absolute top-0 left-0 z-10 visible w-full h-full onload opacity-1"
        />
        <div className="relative z-20">{children}</div>
      </div>
    </>
  );
}
