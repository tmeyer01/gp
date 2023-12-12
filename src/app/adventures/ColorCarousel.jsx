import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const ColorCarousel = ({ colors }) => {
  console.log("working?", colors);

  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (colors) {
      controls.start({ x: -(currentIndex * 100) + "%" });
    }
  }, [currentIndex, controls, colors]);

  // const handleRight = () => {
  //   console.log("----handleNext----", currentIndex);
  //   setCurrentIndex((prevIndex) => {
  //     const lastIndex = colors ? colors.length - 1 : 0;
  //     return prevIndex === lastIndex ? 0 : prevIndex + 1;
  //   });
  // };

  const handleRight = () => {
    console.log("----handleNext----");
    setCurrentIndex((prevIndex) => {
      const lastIndex = colors ? colors.length - 1 : 0;
      const nextIndex = prevIndex === lastIndex ? 0 : prevIndex + 1;
      return nextIndex;
    });
  };

  const handleLeft = () => {
    console.log("----handlePrev----", currentIndex);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (colors ? colors.length : 1)) %
        (colors ? colors.length : 1)
    );
  };

  //   return (
  //     <div className="flex items-center justify-center h-[50rem] mx-auto overflow-hidden border-2 border-orange-700">
  //       <motion.div
  //         className="flex justify-center items-center py-4"
  //         animate={{ x: -(currentIndex * 100) + "%" }}
  //         style={{
  //           width: colors ? `${colors.length * 100}%` : "100%",
  //           transition: "transform 0.3s ease-in-out",
  //         }}
  //       >
  //         {colors &&
  //           colors.map((color, index) => (
  //             <div
  //               key={index}
  //               className="w-full  flex-shrink-0 border-2  border-teal-400 h-[30rem]"
  //             >
  //               <div
  //                 className="w-full h-full bg-gray-800 rounded-md"
  //                 style={{ backgroundColor: color }}
  //               />
  //             </div>
  //           ))}
  //       </motion.div>

  //       <div className=" justify-center w-[9rem] bg-transprent text-white absolute top-0 left-0 bottom-0 flex items-center border-4">
  //         <button
  //           className="w-1/2  bg-white text-black "
  //           onClick={handleLeft}
  //           disabled={currentIndex === 0}
  //         >
  //           LEFT
  //         </button>
  //       </div>
  //       <div className=" justify-center w-[9rem] bg-transprent text-white absolute top-0 right-0 bottom-0 flex items-center border-4">
  //         <button
  //           className=" border-2  w-1/2  bg-white text-black  "
  //           onClick={handleRight}
  //           disabled={currentIndex === (colors ? colors.length - 1 : 0)}
  //         >
  //           RIGHT
  //         </button>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <div className="relative w-10/12 mx-auto h-[50rem] overflow-hidden border-2 border-orange-700">
      <motion.div
        className="relative flex items-center justify-center py-4"
        animate={{ x: -(currentIndex * 100) + "%" }}
        style={{
          width: colors ? `${colors.length * 100}%` : "100%",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {colors &&
          colors.map((color, index) => (
            <div
              key={index}
              className="w-full  flex-shrink-0 border-2  border-teal-400 h-[30rem]"
            >
              <div
                className="w-full h-full bg-gray-800 rounded-md"
                style={{ backgroundColor: color }}
              />
            </div>
          ))}
      </motion.div>

      {/* Buttons Container */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        {/* Left Button */}
        <button
          className="w-auto bg-white text-black border-4"
          onClick={handleLeft}
          disabled={currentIndex === 0}
        >
          LEFT
        </button>
        {/* Right Button */}
        <button
          className="w-auto bg-white text-black border-4"
          onClick={handleRight}
          disabled={currentIndex === (colors ? colors.length - 1 : 0)}
        >
          RIGHT
        </button>
      </div>
    </div>
  );
};

export default ColorCarousel;
