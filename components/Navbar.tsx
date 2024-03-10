"use client";
import ModeToggle from "./Mode";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import React from "react";
const Navbar = () => {
  return (
    <nav className="">
      <section className="flex items-center justify-between px-4 border-b-2 shadow-lg border-b-gray-200 lg:gap-2">
        <div>
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo of my name"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="px-3">
          <ModeToggle />
        </div>
      </section>
      <div className=" left-[50%] bottom-5 right-[50%] fixed py-2 ">
        <ul className={`flex items-center justify-center gap-5 `}>
          <li>
            <Link href="#Home">Home</Link>
          </li>
          <li>
            <Link href="#About">About</Link>
          </li>
          <li>
            <Link href="#Project">Project</Link>
          </li>
          <li>
            <Link href="#Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
