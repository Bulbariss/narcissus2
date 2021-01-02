import Image from "next/image";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function BackgroundImage({ image, children }) {
  let [loaded, setLoaded] = useState(false);
  let imageRef = useRef();
  useEffect(() => {
    let imageElement = imageRef.current.getElementsByClassName("test123")[0];
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
            <div
              className={`bg-image ${
                loaded ? "loaded" : ""
              } absolute top-0 bottom-0 left-0 right-0 w-full h-full`}
            ></div>
            <Image
              onLoad={() => setLoaded(true)}
              layout="fill"
              quality={75}
              objectFit="cover"
              src={image}
              alt=""
              className="transition-opacity select-none test123 -z"
            ></Image>
          </div>
        </div>
        {children}
        <style jsx global>
          {`
            .bg-image::before {
              content: "";
              position: absolute;
              z-index: 2;
              width: 100%;
              height: 100%;
              backdrop-filter: blur(24px); /* apply the blur */
              pointer-events: none; /* make the pseudo class click-through */
            }

            .bg-image {
              position: relative;
              background: no-repeat center center;
              background-image: url("/_next/image?url=${image}&w=80&q=75");
              background-size: cover;
              transition-property: opacity;
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 0.35s;
            }
            .bg-image.loaded {
              opacity: 0;
            }
          `}
        </style>
      </div>
    </>
  );
}
