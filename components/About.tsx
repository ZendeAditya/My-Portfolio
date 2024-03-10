"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import about from "@/public/about.svg";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <main
      id="About"
      className="flex items-center justify-center gap-10 flex-col lg:flex-row py-5 w-screen min-h-screen lg:px-80"
    >
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 10 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="lg:w-[100rem]"
      >
        <Image
          src={about}
          alt="About_svg_icon"
          className="rounded-md w-96 h-96"
        />
      </motion.section>
      <motion.section className="px-8 text-justify lg:w-[100rem]">
        <p>
          I'm <span className="font-semibold text-lg ">Aditya Zende</span>, a
          seasoned full stack web developer specializing in HTML, CSS, Tailwind
          CSS, Bootstrap, JavaScript, React.js, Next.js, TypeScript, and
          MongoDB. With a keen eye for detail and a passion for crafting
          seamless user experiences, I excel in creating dynamic and responsive
          web applications. My expertise lies in designing sleek interfaces and
          implementing efficient backend solutions. With a proven track record
          of delivering high-quality projects on time and within budget, I'm
          committed to staying ahead of the curve with the latest technologies.
          Let's collaborate to elevate your digital presence and drive your
          business growth.
        </p>
      </motion.section>
    </main>
  );
};

export default About;
