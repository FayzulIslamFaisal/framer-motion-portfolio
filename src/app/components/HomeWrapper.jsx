"use client";
import React, { useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import Parallex from "./parallex/Parallex";

const HomeWrapper = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // Get URL hash
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: "smooth",
          });
        }, 100); // Delay for rendering
      }
    }
  }, []);
  return (
    <>
      <section id="home" className="h-screen">
        <Navbar />
        <Hero />
      </section>
      <section id="about" className="h-screen">
        About
      </section>
      <section id="service" className="h-screen">
        <Parallex type="service" />
      </section>
      <section id="portfolio" className="h-screen">
        <Parallex type="portfolio" />
      </section>
      <section id="contact" className="h-screen">
        Portfolio2
      </section>
      {/* <section id="service" className="h-screen">
        Portfolio3
      </section>
      <section id="service" className="h-screen">
        Contact
      </section> */}
    </>
  );
};

export default HomeWrapper;
