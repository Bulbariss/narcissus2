import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function BackgroundImage({ image, children }) {
  let [loaded, setLoaded] = useState(false);
  let imageRef = useRef();
  useEffect(() => {
    let imageElement = imageRef.current.getElementsByClassName("blur-up")[0];
    if (imageElement.complete) {
      setLoaded(true);
      imageElement.style.transitionDuration = "1ms";
    }
  }, []);
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={`/_next/image?url=${image}&w=80&q=75`}
          as="image"
        />
      </Head>
      <div className="relative flex flex-col items-center justify-center w-screen min-h-screen space-y-12">
        <div className="absolute w-full h-full">
          <div
            ref={imageRef}
            className="relative w-full h-full overflow-hidden"
          >
            <img
              aria-hidden="true"
              alt=""
              className={`absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full transition-all duration-200 select-none -z`}
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
    </>
  );
}
