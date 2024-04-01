"use client";
// pages/_app.js

import Image from "next/image";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-menu";
import { cn } from "../../utils/cn";
import "./globals.css";
import { motion } from "framer-motion";
import { LampContainer } from "./components/ui/lamp";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
// import { Navbar } from "./components/ui/navbar";
import { EvervaultCard, Icon } from "./components/ui/evervault-card";
import { relative } from "path";

export default function Home() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows`
  return (
    <div>
      <div className="relative w-full flex items-center justify-center">
        <Navbar className="top-2" />
      </div>
      <div 
      // style={{ minWidth:"100vw", height:"70vh"}}
      >
        <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          CVtoSalary <br /> <span className="text-2xl">Assisting you in discovering your Profession and Passion</span>
        </motion.h1>
        </LampContainer>
      </div>
      <div style={{position: "relative", bottom:"8rem", padding:"0 9rem 0 9rem", opacity:"0.5"}}>
        <TextGenerateEffect words={words} />
        <TextGenerateEffect words={words} />
        <TextGenerateEffect words={words} />
        <TextGenerateEffect words={words} />
        <TextGenerateEffect words={words} />
        <TextGenerateEffect words={words} />
      </div> 
      {/* //EvervaultCard CODE */}
      {/* <div className="flex flex-col items-start max-w-med mx-auto relative h-[30rem]"> */}
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" /> */}
      {/* <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}
 
      {/* <EvervaultCard text="CVtoSalary" /> */}
 
      {/* <h2 className="dark:text-white text-black mt-4 text-med font-light">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p> */}
      
    </div>
  )
}


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 opacity-80", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Why Us?">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <span></span>
        <span></span>
        <MenuItem setActive={setActive} active={active} item="SHOP">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <span></span>
        <span></span>
        <MenuItem setActive={setActive} active={active} item="FAQ">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}