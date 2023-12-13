// components/AnimatedImage.js
import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedImage = ({ src, height, alt }) => {
  const animationVariants = {
    animate: {
      y: [0, 300], // Adjust 'height' to be the height of the grey box
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 22,
          ease: "linear",
        },
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={animationVariants}
      initial={{ y: -height }} // Start above the visible area
      animate="animate"
      whileHover="hover"
      className={`w-full h-full`}
    >
      <Image src={src} layout="fill" objectFit="cover" alt={alt} />
    </motion.div>
  );
};

export default AnimatedImage;
