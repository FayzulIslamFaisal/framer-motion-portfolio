import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="hero z-0 h-[calc(100vh-100px)] flex items-center justify-between relative flex-col-reverse md:flex-row"
      style={{ background: "linear-gradient(180deg, #0c0c1d, #111132)" }}
    >
      {/* Left Content (Title, Subtitle, Buttons) */}
      <motion.div
        className="text-white p-8 space-y-6 w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 1,
          }}
        >
          Fayzul Islam
        </motion.h1>

        <motion.p
          className="text-3xl md:text-4xl font-extrabold italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.5, // Slight delay for p tag to appear after title
            duration: 1.5,
          }}
        >
          Web Developer and Designer
        </motion.p>

        <div className="space-y-4 md:space-x-4 flex flex-col md:flex-row justify-center">
          <motion.button
            className="bg-green-500 text-white py-3 px-10 rounded-lg shadow-xl hover:bg-green-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
            }}
          >
            See the Latest Works
          </motion.button>
          <motion.button
            className="bg-yellow-500 text-white py-3 px-10 rounded-lg shadow-xl hover:bg-yellow-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
            }}
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="relative w-full md:w-1/2"
        style={{ height: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image src="/banner.png" layout="fill" objectFit="cover" alt="image" />
      </motion.div>
    </div>
  );
};

export default Hero;
