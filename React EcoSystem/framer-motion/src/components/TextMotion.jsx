import { motion } from "motion/react";
import React from "react";

const TextMotion = () => {
  const message =
    "HI! This is Morsalin Islam.  I am a student of Computer Science in Satkhira Polytechnic Institute. I have a good knowledge of DSA.";

  const wordArray = message.split(" ");

  return (
    <div className="text-2xl m-4 text-center">
      {wordArray.map((word, index) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: index / 10,
          }}
          key={index}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default TextMotion;
