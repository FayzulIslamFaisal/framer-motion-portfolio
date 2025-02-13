import React from "react";
import Navbar from "./navbar/Navbar";

const HomeWrapper = () => {
  return (
    <>
      <section className="h-screen">
        <Navbar />
      </section>
      <section className="h-screen">Parallax</section>
      <section className="h-screen">Service</section>
      <section className="h-screen">Portfolio1</section>
      <section className="h-screen">Portfolio2</section>
      <section className="h-screen">Portfolio3</section>
      <section className="h-screen">Contact</section>
    </>
  );
};

export default HomeWrapper;
