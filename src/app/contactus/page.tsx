"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Spotlight } from "../components/ui/Spotlight";

function ContactUs() {
   const form = useRef<HTMLFormElement | null>(null);
   const apiKey = process.env.NEXT_PUBLIC_API_KEY || "fallback-api-key";
   const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "fallback-template-id";
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
      <div className="mt-32 sm:mt-36 md:mt-40 flex flex-col  justify-center items-center ">
         <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
         />
         <div className="text-white text-3xl  font-bold">Contact us</div>

         <form
            ref={form}
            onSubmit={sendEmail}
            className="text-black flex flex-col max-w-[85%] sm:w-[70%] md:w-[60%] mb-40  "
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
                  className="rounded font-semibold pl-2"
               />
            </div>
            <input
               type="submit"
               value="Send"
               className="text-white bg-slate-500 rounded h-12 font-bold"
            />
         </form>
      </div>
   );
}

export default ContactUs;