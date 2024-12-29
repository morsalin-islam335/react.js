import { motion } from "motion/react";
// import React from "react";
// const Keyframe = () => {
//   return (
//     <motion.div
//       className="bg-blue-500 border w-32 h-32 my-16 mx-24 text-center flex flex-wrap px-2 py-4 text-white"
//       animate={{
//         borderRadius: ["20%", "20%", "50%", "50%", "20%"],
//         rotate: [0, 90, 180, 270, 0],
//         scale: [1, 1, 2, 2, 1],
//       }}
//       transition={{ duration: 1.7 }}
//       exit={{
//         x: "-100vw",

//         transition: {
//           ease: "easeInOut",
//           duration: 1,
//         },
//       }}
//     >
//       This is key frame animation
//     </motion.div>
//   );
// };

// export default Keyframe;

import React, { useState } from "react";

const Keyframe = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsVisible(!isVisible)}
      >
        Toggle Animation
      </button>

      {/* <AnimatePresence> */}
      {isVisible && (
        <motion.div
          className="bg-blue-500 border w-32 h-32 my-16 mx-24 text-center flex flex-wrap px-2 py-4 text-white"
          animate={{
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            rotate: [0, 90, 180, 270, 0],
            scale: [1, 1, 2, 2, 1],
          }}
          transition={{ duration: 1.7 }}
          exit={{
            x: "-100vw",

            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
        >
          This is key frame animation
        </motion.div>
      )}
      {/* </AnimatePresence> */}

      <div>
        <div className="flex justify-center gap-5">
          <motion.button
            whileTap={{
              scale: 1.5,
              backgroundColor: "gray",
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#E9D5FF",
            }}
            className="bg-purple-100 rounded-md p-5 "
          >
            Tap Me
          </motion.button>

          <motion.button
            whileTap={{
              scale: 1.5,
              backgroundColor: "gray",
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "#E9D5FF",
              animation: {
                yoyo: Infinity,
              },
            }}
            className="bg-purple-100 rounded-md p-5 "
          >
            Tap Me
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Keyframe;
