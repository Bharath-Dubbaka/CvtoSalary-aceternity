"use client";
import React, { useState } from "react";
import { HeroHighlightDemo } from "../components/ui/hero-highlight";
import { Spotlight } from "../components/ui/Spotlight";
import FaqItems from "./FaqItems";

const Faq = () => {
   const [showIndex, setShowIndex] = useState<number | null>(0);
   const itemsArr = [
      {
         ques: "Share an Additional space ?",
         ans: "Ans: Refresh comments Share an Additional Stream Refresh comments Share an Additional Stream Refresh comments Share an Additional Stream Refresh comments Share an Additional Stream",
      },
      {
         ques: "when is LoveDay ?",
         ans: "Ans: Problems with watching live streams? Read the manual  Problems with watching live streams? Read the manual  Problems with watching live streams? Read the manual ",
      },
      {
         ques: "Last  between these teams?",
         ans: "Ans: England	135/7	Pakistan  Problems with watching live streams? Read the manual  Problems with watching live streams? Read the manual  Problems with watching live streams? Read the manual ",
      },
      {
         ques: "How to  Pakistan vs England",
         ans: "Test. 16 October 2024 at 6:00. Lore ipsum Test. 16 October 2024 at 6:00. Lore ipsum Test. 16 October 2024 at 6:00. Lore ipsum Test. 16 October 2024 at 6:00. Lore ipsum ",
      },
   ];
   return (
      <div>
         <Spotlight />
         <div className="pt-40 mx-36">
            <div className="text-3xl flex  justify-center mb-6">
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
   );
};

export default Faq;
