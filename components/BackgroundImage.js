import Image from "next/image";
import { useState } from "react";

export default function BackgroundImage({ image, children }) {
  let [loaded, setLoaded] = useState(false);
  return (
    <div className="relative flex items-center justify-center w-screen min-h-screen">
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <img
            aria-hidden="true"
            alt=""
            className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all duration-200 select-none -z"
            src={`/_next/image?url=${image}&w=80&q=75`}
            loading="eager"
            style={{
              objectPosition: "center",
              filter: "blur(2rem)",
              transform: "scale(1.2)",
            }}
          />
          <Image
            loading="eager"
            onLoad={() => setLoaded(true)}
            layout="fill"
            quality={75}
            objectFit="cover"
            src={image}
            alt=""
            className={`transition-opacity select-none blur-up -z ${
              loaded ? "loaded" : ""
            }`}
          ></Image>
        </div>
      </div>
      {children}
    </div>
  );
}
