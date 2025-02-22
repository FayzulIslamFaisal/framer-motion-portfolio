import React from "react";
import { motion } from "framer-motion";

const Parallex = ({ type }) => {
  const backgroundImage =
    type === "service" ? "/Parallax.jpg" : "/04_preview.avif";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh",
      }}
    >
      {/* Different Overlays */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          type === "service"
            ? " bg-slate-800 opacity-50"
            : "bg-black opacity-50"
        }`}
      ></div>

      {/* Centered Animated Text */}
      <motion.div
        className="flex justify-center items-center w-full h-full absolute top-0 left-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "linear",
          delay: 2,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.h1
          className="text-center text-white text-6xl md:text-8xl font-bold shadow-lg"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            delay: 2,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ scale: 1.1 }}
        >
          {type === "service" ? "What We Do?" : "What We Did?"}
        </motion.h1>
      </motion.div>
    </div>
  );
};

export default Parallex;
