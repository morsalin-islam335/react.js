import { motion } from "motion/react";
import React from "react";
const Simple = () => {
  return (
    <motion.div
      className="bg-red-500 border w-32 h-32 rounded-full"
      initial={{ opacity: 0, scale: 1.5 }} // first time after animation
      animate={{ opacity: 1, scale: 1 }} // last time after animation
      transition={{ duration: 1, delay: 0.1 }} // period from initial ot animate
      exit={{
        x: "-50vw",
        transition: {
          ease: "easeInOut",
          duration: 1,
        },
      }}
    />
  );
};

export default Simple;
