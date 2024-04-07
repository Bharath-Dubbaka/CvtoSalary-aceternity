"use client";
// pages/_app.js
import Image from "next/image";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar-menu";
import { cn } from "../../utils/cn";
import "./globals.css";
import { motion } from "framer-motion";
import { LampContainer } from "./components/ui/lamp";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
// import { Navbar } from "./components/ui/navbar";
import { EvervaultCard, Icon } from "./components/ui/evervault-card";
import { relative } from "path";
import { HoverEffect } from "./components/ui/card-hover-effect";
import {useState } from "react";
import { useEffect } from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { BackgroundGradient } from "./components/ui/background-gradient";



export default function Home() {
  const words = `Transform your resume into a powerful tool that opens doors to opportunities. Trust our experienced resume writers to showcase your strengths and maximize your chances of success.
  `
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
      <div style={{position: "relative", bottom:"14rem", padding:"0 9rem 0 9rem", opacity:"0.5", textAlign:"center"}}>
        <TextGenerateEffect words={words} />
      </div> 
      <div style={{fontSize:"3rem", display:"flex", justifyContent:"center"}}>
        OUR MAIN SERVICES :
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div style={{fontSize:"3rem", display:"flex", justifyContent:"center", padding:"2rem"}}>SHOP</div>
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", padding:"5%, 10%, 5%, 10%"}}>
      <div style={{maxWidth:"20rem", padding: "1rem"}}>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {/* <Image
          src={`/images/stars.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> */}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
        </BackgroundGradient>
      </div>
      <div style={{maxWidth:"20rem", padding: "1rem"}}>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {/* <Image
          src={`/images/stars.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> */}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
        </BackgroundGradient>
      </div>
      <div style={{maxWidth:"20rem", padding: "1rem"}}>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {/* <Image
          src={`/images/stars.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain" 
        /> */}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined 
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
        </BackgroundGradient>
      </div>
      <div style={{maxWidth:"20rem", padding: "1rem"}}>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {/* <Image
          src={`/images/stars.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> */}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
        </BackgroundGradient>
      </div>
      <div style={{maxWidth:"20rem", padding: "1rem"}}>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        {/* <Image
          src={`/images/stars.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        /> */}
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Air Jordan 4 Retro Reimagined
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
        </BackgroundGradient>
      </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          />
      </div>

      <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm">
          <Link href="/termsandconditions" className="text-gray-300 mr-4">Terms & Conditions</Link>
          <a href="#" className="text-gray-300 mr-4">Privacy Policy</a>
          <a href="#" className="text-gray-300">Copyright@CVtoSalary2024</a>
        </div>
      </div>
    </footer>

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


export const projects = [
  {
    title: "Professional Resume writing",
    description:
      "Boost your job prospects with resumes tailored to stand out in a competitive market, Tailored resumes that captivate employers, highlighting your skills and experience for maximum impact.",
    link: "#1",
  },
  {
    title: "LinkedIn profile",
    description:
      "Enhance your profile's visibility by 70%, attracting more recruiters and opportunities, Optimized LinkedIn profiles that showcase your professional brand and attract opportunities.",
    link: "#2",
  },
  {
    title: "Cover Letter",
    description:
      "Compelling cover letters that complement your resume, emphasizing your suitability for the role, expertly crafted to highlight your strengths and aspirations, ensuring you stand out to potential employers.",
    link: "#3",
  },
  {
    title: "ATS Proof",
    description:
      "Ensure your application bypasses ATS filters with 99% compatibility assurance, Ensuring your documents are ATS (Applicant Tracking System) compatible, maximizing your chances of getting noticed.",
    link: "#4",
  },
  {
    title: "SOP's",
    description:
      "Increase your acceptance odds with SOPs that resonate, achieving a 90% success rate as per stats, Expertly crafted Statements of Purpose (SOPs) that eloquently convey your aspirations and achievements.",
    link: "#5",
  },
  {
    title: "Career Coaching",
    description:
      "Personalized guidance to navigate career challenges and unlock your full potential, Unlock your full potential and accelerate your career with personalized coaching sessions tailored to your unique goals and aspirations.",
    link: "#6",
  },
];


const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];