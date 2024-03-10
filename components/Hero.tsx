"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import MyImg from "@/public/MyImg.jpeg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Link from "next/link";
const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const text = "Full Stack Web Developer!".split(" ");
  return (
    <main
      ref={ref}
      className="flex items-center justify-center gap-10 flex-col lg:flex-row overflow-hidden py-5 w-screen h-screen lg:gap-52"
    >
      <section>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-5xl py-5"
        >
          Hello
          {" I'm"}
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          transition={{ ease: "easeOut", duration: 1 }}
          className="text-5xl font-semibold bg-gradient-to-br from-blue-500 to-pink-500 w-fit text-transparent bg-clip-text py-5"
        >
          Aditya Zende !
        </motion.h2>
        {text.map((el, i) => (
          <motion.span
            className="py-7 text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 10 }}
          className="flex items-start justify-center gap-10 py-4 [&_li]:cursor-pointer"
        >
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ color: "blue" }}
            transition={{ delay: 0.5 }}
          >
            <FaFacebookSquare size={30} className="dark:text-white" />
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ color: "blue" }}
            transition={{ delay: 1 }}
          >
            <BsTwitter size={30} className="dark:text-white" />
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ color: "blue" }}
            transition={{ delay: 1.5 }}
          >
            <BsLinkedin size={30} className="dark:text-white" />
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ color: "black" }}
            transition={{ delay: 2 }}
          >
            <BsGithub size={30} className="dark:text-white" />
          </motion.li>
        </motion.ul>
        <div className="flex items-center justify-center p-3">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1vbiKwetpJauZuqr_ODBWVeWH4S0CS5-2/view?usp=drive_link"
          >
            <button className="py-2 px-10 rounded-full bg-green-500 hover:bg-green-600 text-white">
              Download Resume
            </button>
          </Link>
        </div>
      </section>
      <section>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Image
            src={MyImg}
            alt="MyImg"
            className="w-80 h-80 rounded-full object-cover border-2 border-gray-300"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
