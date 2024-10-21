"use client";
import React, { useState } from "react";
import { HeroHighlightDemo } from "../components/ui/hero-highlight";
import { Spotlight } from "../components/ui/Spotlight";
import FaqItems from "./FaqItems";

const Faq = () => {
   const [showIndex, setShowIndex] = useState<number | null>(0);
   const itemsArr = [
      {
         ques: "1. What is an ATS-friendly resume?",
         ans: "Answer: An ATS-friendly resume is specifically designed to pass through Applicant Tracking Systems (ATS), which are used by many firms around the world to filter resumes based on keyword ranking in relation to job descriptions. These algorithms look for relevant keywords and formatting. Our professionals make sure your resume is suited for these systems, boosting your chances of being spotted.",
      },
      {
         ques: "2. Why should I hire a professional resume writer?",
         ans: "Answer: Answer: A professional resume writer understands what employers are searching for and how to modify your experience to make it unique. With industry understanding and keyword optimization, we can help you land more interviews by successfully emphasizing your skills.",
      },
      {
         ques: "3. How does LinkedIn optimization help my job search?",
         ans: "Answer: LinkedIn is one of the most effective tools for networking and job searching. Optimizing your profile with the correct keywords, experiences, and endorsements raises your visibility to recruiters and potential employers.",
      },
      {
         ques: "4. What is the difference between a CV and a resume?",
         ans: "Answer: A resume is a concise summary of your skills, experiences, and qualifications, usually tailored to specific jobs. A CV (Curriculum Vitae) is more detailed, often used in academic and research fields. We tailor both documents to meet the specific requirements of your career path.",
      },
      {
         ques: "5. How long does it take to receive my resume or LinkedIn profile?",
         ans: "Our typical response time is between 5 to 7 business days. In the event that you require your LinkedIn profile or resume sooner, we do offer expedited services.",
      },
      {
         ques: "6. What industries do you specialize in?",
         ans: "In response, our team has worked in a variety of sectors, such as marketing, IT, tech, finance, healthcare and Government sectors as well (state, federal). Our expertise lies in customizing LinkedIn profiles and resumes for particular fields and positions.",
      },
      {
         ques: "7. Do you offer revisions if I am not satisfied with the final product?",
         ans: "Answer: Yes! We provide up to two rounds of edits within 7 days of receiving your resume or LinkedIn profile. Your satisfaction is our top priority.",
      },
      {
         ques: "8. How does the LinkedIn optimization process work?",
         ans: "Answer: We thoroughly analyze your existing profile, ensuring that it is in line with your career objectives, and optimizing your headline, summary, talents, and experiences. We also provide guidance on endorsement and networking methods.",
      },
      {
         ques: "9. Do you guarantee job interviews with your services?",
         ans: "Answer: While we cannot guarantee specific job interviews, our resume writing and LinkedIn optimization services dramatically increase your chances of being spotted by recruiters and getting an interview. The name cvtosalary.com represents our objective of assisting professionals in advance their careers, but it does not promise a salary or job placement. We do not guarantee specific outcomes, such as a job offer or a fixed salary. Instead, we provide you with properly designed resumes and customized LinkedIn profiles that maximize your potential in the job market and improve your chances of success.",
      },
      {
         ques: "10. What additional services do you offer?",
         ans: "Answer: In addition to resume and LinkedIn optimization, we provide cover letter writing, career coaching, interview prep, and personal branding consultations.",
      },
      {
         ques: "11. How do I know if my current resume needs improvement?",
         ans: "Answer: If you aren't receiving responses to job applications or haven't updated your resume in a while, it may be time for a professional review. Our team can review your resume and offer feedback.",
      },
      {
         ques: `12. What makes our service different from other resume writing services?`,
         ans: "Answer: We provide individual attention, industry-specific experience, and employ data-driven tactics to ensure that your resume and LinkedIn profile are in line with current hiring trends and ATS systems.",
      },
   ];
   return (
      <div className="">
         <Spotlight
            className="-top-10 left-0 sm:left-60 sm:-top-20 md:left-60 md:-top-20  max-w-full"
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
            <div className="pt-8 mx-36">
               <div className="text-white text-3xl  font-bold flex  justify-center mb-6">
                  Frequently asked questions:
               </div>
               <div className="border border-gray-800 rounded-2xl px-10 py-4">
                  {itemsArr.map((item, index) => {
                     return (
                        <FaqItems
                           key={index}
                           ques={item.ques}
                           ans={item.ans}
                           showItems={index === showIndex ? true : false}
                           setShow={() => {
                              index == showIndex
                                 ? setShowIndex(null)
                                 : setShowIndex(index);
                           }}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;
