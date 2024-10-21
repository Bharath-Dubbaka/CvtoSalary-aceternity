"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Spotlight } from "../components/ui/Spotlight";

function ContactUs() {
   const form = useRef<HTMLFormElement | null>(null);
   const apiKey = process.env.NEXT_PUBLIC_API_KEY || "fallback-api-key";
   const templateId =
      process.env.NEXT_PUBLIC_TEMPLATE_ID || "fallback-template-id";
   const serviceId =
      process.env.NEXT_PUBLIC_SERVICE_ID_KEY || "fallback-service-id";
   // Check for missing env variables and log or throw error if any are missing
   if (!apiKey || !templateId || !serviceId) {
      throw new Error("Missing environment variables: Check your .env file.");
   }
   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (form.current) {
         emailjs
            .sendForm(serviceId, templateId, form.current, {
               publicKey: apiKey,
            })
            .then(
               () => {
                  console.log("SUCCESS!");
               },
               (error) => {
                  console.log("FAILED...", error.text);
               }
            );
      }
   };

   return (
      <div className="">
         <Spotlight
            className="-top-10 left-0 sm:left-60 sm:-top-20 md:left-60 md:-top-20  max-w-full"
            fill="white"
         />
         <div
            className="mt-32 sm:mt-36 md:mt-40 flex flex-col  justify-center items-center "
            // style={{
            //    position: "relative",
            //    bottom: "20rem",
            //    opacity: "0.5",
            //    textAlign: "center",
            // }}
         >
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
               <div className="text:3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Contact Us
                  {/* / <br /> Privacy policy. */}
               </div>
               <p className="mt-2 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                  Our Executives will reach you within 24hrs.
               </p>
            </div>

            <form
               ref={form}
               onSubmit={sendEmail}
               className="text-black flex flex-col w-[88%] sm:w-[70%] md:w-[60%] mb-40  "
            >
               <div className="flex flex-col mb-4">
                  <label className="text-white mb-1">Name:</label>
                  <input
                     type="text"
                     name="user_name"
                     className="rounded  h-8 font-semibold pl-2"
                  />
               </div>
               <div className="flex flex-col  mb-4">
                  <label className="text-white mb-1">Email:</label>
                  <input
                     type="email"
                     name="user_email"
                     className="rounded  h-8 font-semibold pl-2"
                  />
               </div>
               <div className="flex flex-col  mb-4">
                  <label className="text-white mb-1">Subject:</label>
                  <input
                     type="text"
                     name="user_subject"
                     className="rounded h-8 font-semibold pl-2"
                  />
               </div>
               <div className="flex flex-col  mb-4">
                  <label className="text-white mb-1">Message:</label>
                  <textarea
                     name="message"
                     className="rounded font-semibold pl-2 h-32"
                  />
               </div>
               <input
                  type="submit"
                  value="Send"
                  className="text-white bg-slate-500 rounded h-12 font-bold"
               />
            </form>
         </div>
      </div>
   );
}

export default ContactUs;
