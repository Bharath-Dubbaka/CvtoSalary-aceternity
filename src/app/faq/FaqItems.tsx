import React from "react";
interface FaqItemProps {
   ques: string;
   ans: string;
   showItems: any;
   setShowIndex: any;
   key: any;
}
const FaqItems: React.FC<FaqItemProps> = ({
   ques,
   ans,
   showItems,
   setShowIndex,
   key,
}) => {
   return (
      <div>
         <div
            onClick={(e) => {
             setShowIndex()
            }}
         >
            {ques}
         </div>
         <div className="">{showItems ? <p>{ans}</p> : null}</div>
      </div>
   );
};

export default FaqItems;
