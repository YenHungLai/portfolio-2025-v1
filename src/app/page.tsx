"use client";

import { useState } from "react";
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingLinks from "@/components/FloatingLinks";
// Sections
import AboutMe from "@/Sections/AboutMe";
import Experience from "@/Sections/Experience";
import Projects from "@/Sections/Projects";
import Contact from "@/Sections/Contact";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";
import Loading from "@/components/Loading";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
      <Header
        onMenuClick={() => {
          document.body.style.overflowY = "hidden";
          setIsDrawerOpen(true);
        }}
        isDrawerOpen={isDrawerOpen}
      />
      <main className="max-w-[1600px] w-full mx-auto">
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <Loading />
      <Drawer
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
          document.body.style.overflowY = "auto";
        }}
      />
      <FloatingLinks />
      <FloatingLinks type="email" position="right" />
    </div>
  );
}
