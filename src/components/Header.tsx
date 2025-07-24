"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import hex from "../../public/hex.svg";
import logo from "../../public/logo.svg";

interface HeaderProps {
  onMenuClick: () => void;
  isDrawerOpen: boolean;
}

export default function Header({ onMenuClick, isDrawerOpen }: HeaderProps) {
  return (
    <header className="header">
      <nav className="flex items-center flex-1">
        <div className="logo">
          <a href="/" aria-label="home" className="">
            <Image src={logo} alt="logo" width={42} height={48} />
          </a>
        </div>

        <div className="ml-auto hidden md:flex">
          <ol className="flex gap-[5px] **:text-[13px] items-center [&_span]:text-green [&_span]:mr-[5px] [&_a]:hover:text-green">
            <li className="p-[10px]">
              <a href="/#about">
                <span>01.</span>About
              </a>
            </li>
            <li className="p-[10px]">
              <a href="/#experience">
                <span>02.</span>Experience
              </a>
            </li>
            <li className="p-[10px]">
              <a href="/#work">
                <span>03.</span>Work
              </a>
            </li>
            <li className="p-[10px]">
              <a href="/#contact">
                <span>04.</span>Contact
              </a>
            </li>
          </ol>
          <Button className="ml-[20px] px-[16px] py-[12px]">Resume</Button>
        </div>

        <a className="md:hidden ml-auto" onClick={onMenuClick}>
          <div className="hamburger cursor-pointer flex flex-col items-end scale-125">
            <div className="w-7 h-0.5 bg-green mb-1"></div>
            <div className="w-5 h-0.5 bg-green mb-1"></div>
            <div className="w-3 h-0.5 bg-green"></div>
          </div>
        </a>
      </nav>
    </header>
  );
}
