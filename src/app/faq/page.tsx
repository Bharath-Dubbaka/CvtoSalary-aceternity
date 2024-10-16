"use client";
import React, { useState } from "react";
import { HeroHighlightDemo } from "../components/ui/hero-highlight";
import { Spotlight } from "../components/ui/Spotlight";
import FaqItems from "./FaqItems";

const Faq = () => {
   const [showIndex, setShowIndex] = useState<number | null>(0);
   const itemsArr = [
      {
         ques: "Ques lorem ipsum?",
         ans: "Ans lore ipsum",
      },
      {
         ques: "Ques 2 lorem ipsum?",
         ans: "Ans 2 lore ipsum",
      },
      {
         ques: "Ques 3 lorem ipsum?",
         ans: "Ans 3 lore ipsum",
      },
      {
         ques: "Ques 4 lorem ipsum?",
         ans: "Ans 4 lore ipsum",
      },
   ];
   return (
      <div>
         <Spotlight />
         <div>
            {itemsArr.map((item, index) => {
               return (
                  <FaqItems
                     key={index}
                     ques={item.ques}
                     ans={item.ans}
                     showItems={index === showIndex ? true : false}
                     setShowIndex={() => {
                        index == showIndex
                           ? setShowIndex(null)
                           : setShowIndex(index);
                     }}
                  />
               );
            })}
         </div>
      </div>
   );
};

export default Faq;
