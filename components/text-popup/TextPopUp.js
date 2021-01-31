import { motion } from "framer-motion";

const TextPopUp = ({ text }) => {
  const transition = {
    duration: 0.4,
    ease: [0.6, 0.01, -0.05, 0.9],
  };
  const letter = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: { ...transition },
    },
  };

  const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };
  return (
    <motion.span
      className="overflow-hidden"
      initial="initial"
      animate="animate"
      variants={firstName}
    >
      {[
        "Арт-проект,",
        "в котором ",
        "Koshka",
        " ",
        "Neon",
        " ",
        "вместе",
        " ",
        "с",
        " ",
        "певицей",
        " ",
        "Сабриной",
        " ",
        "и",
        " ",
        "певицей",
        " ",
        "Mirele",
        " поднимают проблему абьюзивных отношений.",
      ].map((char, i) => (
        <motion.span
          className={`relative ${char === " " ? "" : "inline-block"}`}
          key={i}
          variants={letter}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextPopUp;
