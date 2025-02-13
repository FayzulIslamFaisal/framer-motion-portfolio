import React, { useState } from "react";
import { motion } from "framer-motion";

const Links = () => {
  const links = ["home", "about", "service", "portfolio", "contact"];
  const [active, setActive] = useState(null);

  const handleScroll = (id) => {
    setActive(id); // Set the clicked menu as active
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust based on navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full absolute flex flex-col items-center justify-center gap-5 z-10">
      {links.map((link) => (
        <motion.button
          key={link}
          onClick={() => handleScroll(link)}
          className={`text-lg font-bold ${
            active === link ? "text-blue-500" : "text-black"
          } cursor-pointer`}
          whileTap={{ scale: 0.9 }} // Shrinks when clicked
          whileHover={{ scale: 1.1 }} // Expands slightly when hovered
          transition={{ type: "spring", stiffness: 300 }}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default Links;
