import React from "react";
import { Spotlight } from "../components/ui/Spotlight";

const About = () => {
   return (
      <div className="">
         <Spotlight
            className="-top-10 left-0 sm:left-60 sm:-top-20 md:left-60 md:-top-20  max-w-full fixed"
            fill="white"
         />
         <div
            className="mt-32 sm:mt-36 md:mt-32 flex flex-col  justify-center items-center "
            // style={{
            //    position: "relative",
            //    bottom: "20rem",
            //    opacity: "0.5",
            //    textAlign: "center",
            // }}
         >
            <div className="pt-8 mx-6 sm:mx-36 md:mx-36">
               <div className="mb-4 text-3xl sm:text-4xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  About Our Team
                  {/* / <br /> Privacy policy. */}
               </div>
               <div className="border border-gray-800 rounded-lg p-2 pt-6 sm:p-8 md:p-8 pb-1" >
                  <p className=" text-center mb-6  ">
                     Our Team @CVtoSalary is made up of seasoned professionals
                     who have considerable expertise working with candidates and
                     hiring processes in India and North America. We provide a
                     plethora of experience from working with Fortune 500
                     companies, notably in the IT and tech industries. We
                     understand the regional hiring dynamics, industry-specific
                     needs, and what recruiters from global and Fortune 500
                     organizations look for after successfully crafting resumes
                     and optimizing LinkedIn profiles for people aspiring for
                     top-tier roles in these locations.
                  </p>
                  <p className=" text-center mb-6">
                     From entry-level IT employment to senior leadership
                     positions, our team specializes in matching your personal
                     brand with industry expectations, allowing you to stand out
                     in a competitive global job market.
                  </p>
               </div>
            </div>

            <hr className=" bg-white" />
            <div className="mt-8 mx-6 sm:mx-36 md:mx-36 border border-slate-800 rounded-lg p-2 sm:p-8 md:p-8">
               <div className="text-2xl mb-4">Why CVToSalary ?</div>
               <p className="mb-2">
                  <div>Our Expertise:</div>
                  At cvtosalary, we are committed to helping people land their
                  ideal jobs by creating distinctive resumes and optimizing
                  LinkedIn profiles for maximum visibility. As industry leaders
                  in resume writing and LinkedIn optimization, we recognize that
                  today&apos;s job market requires more than simply skills; it
                  also requires a compelling personal brand.
               </p>
               <p className="mb-6">
                  <div>Industry Standards:</div>
                  Our skilled writers and career strategists understand the most
                  recent recruiting trends, ATS (Applicant Tracking Systems),
                  and industry intricacies. We use a targeted strategy to ensure
                  that your resume not only passes first assessments, but also
                  effectively shows your unique value offer. We can help you
                  make a strong first impression on recruiters and hiring
                  managers by using established resume formats and keyword
                  optimization.
               </p>
               <p className="mb-6">
                  <div>Market Insights:</div>
                  Our LinkedIn profile optimization service improves your
                  digital presence by making your profile search-friendly and
                  highlighting your professional achievements in a way that
                  appeals to both recruiters and industry professionals. With
                  LinkedIn serving as a vital site for networking and job
                  hunting, we ensure that your profile not only draws attention
                  but also converts views into interviews.
               </p>
               <p className="mb-6">
                  <div>Global Hiring Trends:</div>
                  In today&apos;s competitive employment market, simply
                  possessing the appropriate abilities isn&apos;t enough; you
                  also need to be able to showcase them effectively. With
                  automated screening technologies and digital-first recruiting
                  processes on the rise, job seekers want professionally
                  produced documents and optimized profiles to stand out. Our
                  services put you in the best possible position to succeed in
                  this rapidly changing landscape.
               </p>
            </div>
            <hr />
            <div className="mx-8 sm:mx-28 md:mx-28 mt-6 sm:mt-12 md:mt-12 text-center ">
               <p>
                  ***At cvtosalary, we believe that the right combination of a
                  well-written resume and a strategically optimized LinkedIn
                  profile is the key to unlocking new career opportunities.
                  Whether you&apos;re an entry-level candidate or an experienced
                  executive, our services are designed to elevate your
                  professional brand and accelerate your job search success.
                  Don’t let your dream job slip away—reach out to us today, and
                  let us help you stand out in a competitive market. Your next
                  big career move could be just one click away! And get a free
                  callback!!!
               </p>
               <input
                  type="button"
                  value="Contact Us"
                  className="h-10 bg-slate-600 hover:bg-blue-950 mt-4 mb-24 rounded px-10"
               />
            </div>
         </div>
      </div>
   );
};

export default About;
