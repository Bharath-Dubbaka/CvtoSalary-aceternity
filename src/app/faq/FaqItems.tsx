import { p } from "framer-motion/client";
import React from "react";
interface FaqItemProps {
   ques: string;
   ans: string;
   showItems: any;
   setShow: any;
   key: any;
}
const FaqItems: React.FC<FaqItemProps> = ({
   ques,
   ans,
   showItems,
   setShow,
   key,
}) => {
   return (
      <div className="border border-gray-800 rounded-2xl p-4 mb-2 ">
         <div
            onClick={(e) => {
               setShow();
            }}
            className="font-semibold flex justify-between "
         >
            <div>{ques}</div>
            <div>{showItems ? "🔻" : "🟩"}</div>
         </div>
         <>
            {showItems ? (
               <div className="pt-2">
                  {" "}
                  <hr className="h-px mb-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  {ans}
               </div>
            ) : null}
         </>
      </div>
   );
};

export default FaqItems;
