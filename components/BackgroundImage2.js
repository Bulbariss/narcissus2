import Image from "next/image";
import { useRef } from "react";
import Head from "next/head";

export default function BackgroundImage({ image, children }) {
  let imageRef = useRef();
  const placeholderUrl = `/_next/image?url=${image}&w=40&q=75`;

  function imageLoaded() {
    let imagePlaceholder = imageRef.current.getElementsByClassName(
      "bg-image"
    )[0];
    imagePlaceholder.classList.add("loaded");
  }
  return (
    <>
      <Head>
        <link rel="preload" href={placeholderUrl} as="image" />
      </Head>
      <div
        ref={imageRef}
        className="relative flex flex-col items-center justify-center w-screen min-h-screen"
      >
        <Image
          onLoad={() => imageLoaded()}
          layout="fill"
          quality={75}
          objectFit="cover"
          src={image}
          alt=""
          className="select-none test123 -z"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            style={{
              backgroundImage: `url("${placeholderUrl}")`,
            }}
            className={`bg-image w-full h-full z-10 delay-200`}
          ></div>
        </div>
        {children}
      </div>
    </>
  );
}
