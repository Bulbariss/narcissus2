import React from "react";

const SecondScreen = () => {
  return (
    <section className="relative px-4 py-32 bg-gray-900 md:text-center color-white">
      <h2 className="pb-4 H1 bbb">О чем наш проект</h2>
      <p className="mx-auto text-gray-300 whitespace-pre-line max-w-text P">
        {
          "Проект состоит из атмосферного mood-видео, серии фото-коллажей и исследования, в рамках которого команда углубилась в проблему вместе с психологом и получила советы, которые помогут распознать\nнарцисса-абьюзера."
        }
      </p>
    </section>
  );
};

export default SecondScreen;
