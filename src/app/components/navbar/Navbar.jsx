"use client";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { motion } from "framer-motion";
import SideBar from "../sideBar/SideBar";

const Navbar = () => {
  return (
    <div>
      <SideBar />
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-2">
          <motion.div
            initial={{ opaciti: 0, scale: 0.7 }}
            animate={{ opaciti: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" className="text-2xl font-bold">
              Portfolio
            </Link>
          </motion.div>
          <ul className=" flex items-center gap-4">
            <li>
              <Link href="#" className="mx-4 text-lg">
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" className="mx-4 text-lg">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" className="mx-4 text-lg">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="#" className="mx-4 text-lg">
                <FaInstagramSquare />
              </Link>
            </li>
            <li>
              <Link href="#" className="mx-4 text-lg">
                <IoLogoYoutube />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
