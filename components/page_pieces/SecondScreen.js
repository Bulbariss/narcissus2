import React from "react";

const SecondScreen = ({ data }) => {
  return (
    <section className="relative px-4 py-32 bg-gray-900 md:text-center color-white">
      <h2 className="pb-4 H1 bbb">{data.aboutHeading}</h2>
      <p className="mx-auto text-gray-300 whitespace-pre-line max-w-text P">
        {data.aboutText}
      </p>
    </section>
  );
};

export default SecondScreen;
