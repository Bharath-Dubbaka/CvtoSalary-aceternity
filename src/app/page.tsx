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
import { Timeline, TimelineDemo } from "./components/ui/timeline";
import { AuroraBackgroundDemo } from "./components/ui/aurora-background";

export default function Home() {
   const projects = [
      {
         title: "Professional Resume writing",
         description:
            "Boost your job prospects with ATS proof resumes tailored to stand out in a competitive market, Tailored resumes that captivate employers, highlighting your skills and experience for maximum impact.",
         link: "#1",
      },
      {
         title: "LinkedIn profile",
         description:
            "Enhance your profiles visibility by 70%, attracting more recruiters and opportunities, Optimized LinkedIn profiles that showcase your professional brand and attract opportunities.",
         link: "#2",
      },
      {
         title: "Cover Letter",
         description:
            "Compelling cover letters that complement your resume, emphasizing your suitability for the role, expertly crafted to highlight your strengths and aspirations, ensuring you stand out to potential employers.",
         link: "#3",
      },
      {
         title: "SOPs",
         description:
            "Increase your acceptance odds with SOPs that resonate, achieving a 90% success rate as per stats, Expertly crafted Statements of Purpose (SOPs) that eloquently convey your aspirations and achievements.",
         link: "#4",
      },
      {
         title: "Personal Branding",
         description:
            "Ensure your application bypasses ATS filters with 99% compatibility assurance, Ensuring your documents are ATS (Applicant Tracking System) compatible, maximizing your chances of getting noticed.",
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
         quote: "Helped me not only to get my work noticed, but also land interviews, Highly recommended.",
         name: "Vijay K",
         title: "Embedded Engineer, USA",
      },
      {
         quote: "Their ability to match my resume to industry-specific keywords was vital to being noticed as i have much diverse skills than usual. I definitely recommend them if you are experiencing rejections during your initial screening.",
         name: "Radha Krishnan",
         title: "Senior Software Engineer, CAN",
      },
      {
         quote: "They not only improved my resume, but also highlighted the value of keyword optimization to get better reach from companies and recruiters I had no idea how vital that was until they walked me through it.",
         name: "Jaideep Bannu",
         title: "AV/Network Engineer, IND",
      },
      {
         quote: "They understand the unique challenges developers face and also helped me understand how recruiting works so that I could better comprehend and take the necessary steps.",
         name: "Krishna Mani",
         title: "SOC Engineer, USA",
      },
      {
         quote: "After having my LinkedIn profile optimized by CVtoSalary, I started receiving more profile views and messages from recruiters. Strongly suggest for anyone looking to boost their digital presence!   ",
         name: "Shiva Subramanyam",
         title: "Sr. Financial Analyst, IND",
      },
      {
         quote: "I love working with CVtoSalary because they truly put their clients first. They took the time to understand my background as a developer and tailored my resume and LinkedIn profile in a way that highlighted my technical skills perfectly and get more visibility.",
         name: "Raja Rao",
         title: "Full Stack Developer, IND",
      },
   ];

   const words = `We are a team with over 20 years of combined expertise focusing in ATS-friendly resumes, cover letters, LinkedIn profiles, and career coaching to help you build your unique brand`;
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
            className="px-4 mt-8 "
            style={{
               position: "relative",
               bottom: "20rem",
               opacity: "0.5",
               textAlign: "center",
            }}
         >
            <TextGenerateEffect words={words} />
         </div>
         <div className="-mt-[16rem] relative z-20 text-gray-300">
            <div
               className="text-3xl md:text-5xl"
               style={{
                  display: "flex",
                  justifyContent: "center",
               }}
            >
               OUR SERVICES :
            </div>
            <div className="max-w-5xl mx-auto px-8">
               <HoverEffect items={projects} />
            </div>
         </div>
         <div className="m-2">
            <TimelineDemo />
         </div>
         <div
            className="text-3xl md:text-5xl"
            style={{
               display: "flex",
               justifyContent: "center",
               padding: "2rem",
            }}
         >
            SHOP:
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
         <div className="h-[30rem] mt-6 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div className="text-white p-[1rem] text-3xl md:text-5xl">
               TESTIMONIALS:{" "}
            </div>
            <InfiniteMovingCards
               items={testimonials}
               direction="right"
               speed="slow"
            />
         </div>

         <footer className="bg-slate-800 text-white py-4">
            <div className="container flex items-center justify-between">
               <div className="text-sm flex flex-wrap px-4 ">
                  <Link
                     href="/termsandconditions"
                     className="text-gray-300 mr-4 mb-2"
                  >
                     Terms & Conditions
                  </Link>
                  <Link
                     href="/privacypolicy"
                     className="text-gray-300 mr-4 mb-2"
                  >
                     Privacy Policy
                  </Link>
                  <div className="text-gray-300 mb-2">
                     Copyright@CVtoSalary2024
                  </div>
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
