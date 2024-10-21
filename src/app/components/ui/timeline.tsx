"use client";
import {
   useMotionValueEvent,
   useScroll,
   useTransform,
   motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import applyPng from "../../images/undraw_applyNew.png";
import sitPng from "../../images/undraw_sitdown.png";
import study from "../../images/study.png";
import time from "../../images/time.png";
import revisionPng from "../../images/revisionPng.png";
import growthPng from "../../images/growthPng.png";
import happycustomer from "../../images/happycustomer.png";
import approvePng from "../../images/approvePng.png";
import reachingPng from "../../images/reachingPng.png";

interface TimelineEntry {
   title: string;
   content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
   const ref = useRef<HTMLDivElement>(null);
   const containerRef = useRef<HTMLDivElement>(null);
   const [height, setHeight] = useState(0);

   useEffect(() => {
      if (ref.current) {
         const rect = ref.current.getBoundingClientRect();
         setHeight(rect.height);
      }
   }, [ref]);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start 10%", "end 50%"],
   });

   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

   return (
      <div
         className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
         ref={containerRef}
      >
         <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
               HOW WE WORK:
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
               I&apos;ve been working on Aceternity for the past 2 years.
               Here&apos;s a timeline of my journey.
            </p>
         </div>

         <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
               <div
                  key={index}
                  className="flex justify-start pt-10 md:pt-10 md:gap-10"
               >
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                     <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                     </div>
                     <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                        {item.title}
                     </h3>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                     <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                        {item.title}
                     </h3>
                     {item.content}{" "}
                  </div>
               </div>
            ))}
            <div
               style={{
                  height: height + "px",
               }}
               className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
               <motion.div
                  style={{
                     height: heightTransform,
                     opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
               />
            </div>
         </div>
      </div>
   );
};

export function TimelineDemo() {
   const data = [
      {
         title: "Step 1",
         content: (
            <div>
               <div className="flex">
                  <div className="text-neutral-800 dark:text-neutral-200  mb-8 w-[50%] pl-0 p-2  flex items-center">
                     At CVtoSalary.io, we make the process simple and secure.
                     Start by exploring our range of services tailored to meet
                     your career needs. Once you have selected the service that
                     best fits your goals, fill the form with necessary
                     information and you can easily proceed to checkout on our
                     website.
                  </div>
                  <div className=" w-[50%]">
                     <Image
                        src={reachingPng}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-60 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                     />
                  </div>
               </div>
               <div className="flex">
                  <div className=" w-[50%]">
                     <Image
                        src={applyPng}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-60 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                     />
                  </div>
                  <div className="text-neutral-800 dark:text-neutral-200  mb-8 w-[50%] pr-0 p-2 flex items-center">
                     Your payment will be processed through a highly secure and
                     encrypted channel, ensuring your personal and financial
                     information is protected at every step. Rest assured, we
                     prioritize your security and privacy, making your
                     experience with us seamless and trustworthy.
                  </div>
               </div>
            </div>
         ),
      },
      {
         title: "Step 2",
         content: (
            <div>
               <div className="flex">
                  <div className="text-neutral-800 dark:text-neutral-200 mb-8 w-[50%] pr-0 p-2 flex items-center">
                     Within 24hrs, a representative from our team will get in
                     touch with you to collect your information and learn about
                     your preferences.
                  </div>
                  <div className=" w-[50%]">
                     <Image
                        src={time}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-60 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                     />
                  </div>
               </div>
               <div className="flex">
                  <div className=" w-[50%]">
                     <Image
                        src={study}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-60 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                     />
                  </div>
                  <div className="text-neutral-800 dark:text-neutral-200 mb-8 w-[50%] pr-0 p-2 flex items-center">
                     This enables us to understand the basic overview which
                     helps us to provide customized solution that best meets
                     your requirements.
                  </div>
               </div>
            </div>
         ),
      },
      {
         title: "Step 3",
         content: (
            <div>
               <div className="flex">
                  <div className="text-neutral-800 dark:text-neutral-200 mb-8 pr-0 p-2 flex items-center">
                     Our knowledgeable writing staff looks over your profile and
                     analyzes it in light of the most recent market and industry
                     developments. Following a thorough examination and careful
                     deliberation, they draft the initial version of your paper.
                     This draft is intended to draw attention to your abilities
                     and match your qualifications with what companies are
                     seeking in the cutthroat job market of today.
                  </div>
               </div>
               <div>
                  <div className="grid grid-cols-2 gap-4">
                     <Image
                        src={growthPng}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-60 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                     />
                     <Image
                        src={revisionPng}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-60 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                     />
                  </div>
               </div>
            </div>
         ),
      },
      {
         title: "Step 4",
         content: (
            <div>
               <p className="text-neutral-800 dark:text-neutral-200  mb-4">
                  You provide feedback on the initial draft, and the group
                  refines it until you are happy. After you give your approval,
                  you receive the final version via email.
               </p>
               <div className="mb-8">
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 ">
                     ✅ 10 revisions
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ 6 months support
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Random perk working with us
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Another Random perk
                  </div>
                  <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                     ✅ Something along the same lines
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <Image
                     src={happycustomer}
                     alt="hero template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                  <Image
                     src={approvePng}
                     alt="feature template"
                     width={500}
                     height={500}
                     className="rounded-lg object-cover h-20 md:h-44 lg:h-[12rem] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
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
