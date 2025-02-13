"use client";
import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1800px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 25px 25px)",
      transition: {
        delay: 0.5,
        type: "spring",
        damping: 40,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="fixed left-0 top-5"
    >
      <motion.div
        variants={variants}
        className="fixed left-0 top-0 w-[400px] bg-white z-10 h-screen"
      >
        <Links />
      </motion.div>
      <ToggleButton open={open} setOpen={setOpen} />
    </motion.div>
  );
};

export default SideBar;
