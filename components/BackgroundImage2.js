import Image from "next/image";
import { useRef } from "react";
import Head from "next/head";

export default function BackgroundImage({ image, children }) {
  // let [loaded, setLoaded] = useState(false);
  let imageRef = useRef();
  function anim() {
    let imageElement2 = imageRef.current.getElementsByClassName("bg-image")[0];
    imageElement2.classList.add("loaded");
  }
  // useEffect(() => {
  //   let imageElement = imageRef.current.getElementsByClassName("test123")[0];
  //   if (imageElement.complete) {
  //     let imageElement2 = imageRef.current.getElementsByClassName(
  //       "bg-image"
  //     )[0];
  //     imageElement2.classList.add("loaded");
  //   }
  // }, []);
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={`/_next/image?url=${image}&w=80&q=75`}
          as="image"
        />
      </Head>
      <div
        ref={imageRef}
        className="relative flex flex-col items-center justify-center w-screen min-h-screen"
      >
        <Image
          onLoad={() => anim()}
          layout="fill"
          quality={75}
          objectFit="cover"
          src={image}
          alt=""
          className="select-none test123 -z"
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            style={{
              backgroundImage: `url("/_next/image?url=${image}&w=80&q=75")`,
            }}
            className={`bg-image w-full h-full z-10 delay-200`}
          ></div>
        </div>
        {children}
      </div>
    </>
  );
}
