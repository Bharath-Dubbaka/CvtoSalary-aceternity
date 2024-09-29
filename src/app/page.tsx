"use client";
// pages/_app.js
import Image from "next/image";
import Link from "next/link";
import {
   HoveredLink,
   Menu,
   MenuItem,
   ProductItem,
} from "./components/ui/navbar-menu";
import { cn } from "../../utils/cn";
import "./globals.css";
import { motion } from "framer-motion";
import { LampContainer } from "./components/ui/lamp";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
// import { Navbar } from "./components/ui/navbar";
import { EvervaultCard, Icon } from "./components/ui/evervault-card";
import { relative } from "path";
import { HoverEffect } from "./components/ui/card-hover-effect";
import { useState } from "react";
import { useEffect } from "react";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { Timeline } from "./components/ui/timeline";
import { AuroraBackgroundDemo } from "./components/ui/aurora-background";

export default function Home() {
   const words = `Transform your resume into a powerful tool that opens doors to opportunities. Trust our experienced resume writers to showcase your strengths and maximize your chances of success.
  `;
   return (
      <div>
         <div
            // style={{ minWidth:"100vw", height:"70vh"}}
            className="z-10"
         >
            <AuroraBackgroundDemo />
            {/* <LampContainer>
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
                  CVtoSalary <br />{" "}
                  <span className="text-2xl">
                     Assisting you in discovering your Profession and Passion
                  </span>
               </motion.h1>
            </LampContainer> */}
         </div>
         <div
            className="px-4"
            style={{
               position: "relative",
               bottom: "20rem",
               opacity: "0.5",
               textAlign: "center",
            }}
         >
            <TextGenerateEffect words={words} />
         </div>
         <div className="-mt-32 z-20">
            <div
               style={{
                  fontSize: "3rem",
                  display: "flex",
                  justifyContent: "center",
               }}
            >
               OUR MAIN SERVICES :
            </div>
            <div className="max-w-5xl mx-auto px-8">
               <HoverEffect items={projects} />
            </div>
         </div>
         <div className="m-2">
            <TimelineDemo />
         </div>
         <div
            style={{
               fontSize: "3rem",
               display: "flex",
               justifyContent: "center",
               padding: "2rem",
            }}
         >
            SHOP
         </div>
         <div
            style={{
               display: "flex",
               justifyContent: "center",
               flexWrap: "wrap",
               padding: "5%, 10%, 5%, 10%",
            }}
         >
            <div style={{ maxWidth: "20rem", padding: "1rem" }}>
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
                     The Air Jordan 4 Retro Reimagined Bred will release on
                     Saturday, February 17, 2024. Your best opportunity to get
                     these right now is by entering raffles and waiting for the
                     official releases.
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                     <span>Buy now </span>
                     <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                     </span>
                  </button>
               </BackgroundGradient>
            </div>
            <div style={{ maxWidth: "20rem", padding: "1rem" }}>
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
                     The Air Jordan 4 Retro Reimagined Bred will release on
                     Saturday, February 17, 2024. Your best opportunity to get
                     these right now is by entering raffles and waiting for the
                     official releases.
                  </p>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                     <span>Buy now </span>
                     <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                     </span>
                  </button>
               </BackgroundGradient>
            </div>
            <div style={{ maxWidth: "20rem", padding: "1rem" }}>
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
                     The Air Jordan 4 Retro Reimagined Bred will release on
                     Saturday, February 17, 2024. Your best opportunity to get
                     these right now is by entering raffles and waiting for the
                     official releases.
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
                  <Link
                     href="/termsandconditions"
                     className="text-gray-300 mr-4"
                  >
                     Terms & Conditions
                  </Link>
                  <Link href="/privacypolicy" className="text-gray-300 mr-4">
                     Privacy Policy
                  </Link>
                  <a href="#" className="text-gray-300">
                     Copyright@CVtoSalary2024
                  </a>
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
      quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
   },
   {
      quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
   },
   {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
   },
   {
      quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
   },
   {
      quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
   },
];

export function TimelineDemo() {
   const data = [
      {
         title: "2024",
         content: (
            <div>
               <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Built and launched Aceternity UI and Aceternity UI Pro from
                  scratch
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="https://assets.aceternity.com/templates/startup-1.webp"
                     alt="startup template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/templates/startup-2.webp"
                     alt="startup template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/templates/startup-3.webp"
                     alt="startup template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/templates/startup-4.webp"
                     alt="startup template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "Early 2023",
         content: (
            <div>
               <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  I usually run out of copy, but when I see content this big, I
                  try to integrate lorem ipsum.
               </p>
               <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                  Lorem ipsum is for people who are too lazy to write copy. But
                  we are not. Here are some more example of beautiful designs I
                  built.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="https://assets.aceternity.com/pro/hero-sections.png"
                     alt="hero template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/features-section.png"
                     alt="feature template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/pro/bento-grids.png"
                     alt="bento template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/cards.png"
                     alt="cards template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
      {
         title: "Changelog",
         content: (
            <div>
               <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                  Deployed 5 new components on Aceternity today
               </p>
               <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Card grid component
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Startup template Aceternity
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Random file upload lol
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Himesh Reshammiya Music CD
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Salman Bhai Fan Club registrations open
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src="https://assets.aceternity.com/pro/hero-sections.png"
                     alt="hero template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/features-section.png"
                     alt="feature template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/pro/bento-grids.png"
                     alt="bento template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src="https://assets.aceternity.com/cards.png"
                     alt="cards template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
               </div>
            </div>
         ),
      },
   ];
   return (
      <div className="w-full">
         <Timeline data={data} />
      </div>
   );
}
