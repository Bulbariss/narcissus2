import Image from "next/image";
import { useState } from "react";

export default function BackgroundImage({ image, children }) {
  let [loaded, setLoaded] = useState(false);
  return (
    <div className="relative flex items-center justify-center w-screen min-h-screen">
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Our placeholder image */}
          <img
            aria-hidden="true"
            alt=""
            className="transition-all duration-200 select-none -z"
            src={`/_next/image?url=${image}&w=80&q=75`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              /* Adjust the content to fit */
              objectFit: "cover",
              objectPosition: "center",
              /* Blur the image and scale to avoid transparent corners */
              filter: "blur(2rem)",
              transform: "scale(1.2)",
            }}
          />
          {/* Your image, optimized by next/image */}
          <Image
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
      <style jsx global>{`
        .blur-up {
          transition-duration: 800ms;
          opacity: 0;
        }
        .blur-up.loaded {
          opacity: 0.99;
        }
      `}</style>
    </div>
  );
}
