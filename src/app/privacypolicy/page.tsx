import React from "react";
import { cn } from "../../../utils/cn";
import { Spotlight } from "../components/ui/Spotlight";
import { AuroraBackgroundDemo } from "../components/ui/aurora-background";
export default function PrivacyPolicy() {
   return (
      <div>
         <div className="h-[35rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            {/* <AuroraBackgroundDemo /> */}
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
               <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Privacy Policy.
                  {/* / <br /> Privacy policy. */}
               </h1>
               <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                  Spotlight effect is a great way to draw attention to a
                  specific part of the page. Here, we are drawing the attention
                  towards the text section of the page. I don&apos;t know why
                  but I&apos;m running out of copy.
               </p>
            </div>
         </div>
         <div
            className="mt-4 font-normal text-base text-neutral-300  mx-auto"
            style={{
               paddingLeft: "5rem",
               paddingRight: "5rem",
               position: "relative",
               bottom: "8rem",
            }}
         >
            <div style={{ paddingTop: "2rem" }}>Terms & Conditions</div>
            <div>USE OF DATA</div>
            <div>
               The user hereby agrees and irrevocably authorizes us (Bookyourcv)
               to:
            </div>

            <div>
               a) Use any data and information supplied by the user in
               connection with this agreement for the companys own purpose, the
               company supplying such data and information to any other
               associated companies or selected third parties including search
               engines or for promotional mails or business updates or the
               services offered by our partner.
            </div>
            <div>
               b) use any data furnished by the member in order to float offers
               or send mails regarding specific services and such mails may not
               been proclaimed or deemed to be unsolicited communiqué.
            </div>
            <div>
               c) Allow all data and information supplied by the member in using
               the service to remain at bookyourcv.com for the use of the
               company in accordance with service agreement with the member,
               notwithstanding the termination or suspension of the service to
               the member herein. If you share your linkedin credentials with us
               then you agree to update your profile online by our team, liking
               or commenting on our company page on your befalf.
            </div>

            <div style={{ paddingTop: "2rem" }}>JOB GUARANTEE</div>
            <div>
               We do not promise or take guarantee for any job or interview
               calls to the end user after taking our services. The services
               provided by us are our best effort and best in class and provided
               very economically. The selection in interview depends on many
               criteria like your current profile, experience, qualification
               etc. In today scenario there is much competition in the market
               and this has to be understand by job seeker.
            </div>
            <div>Payment card /Net banking details</div>
            <div>
               You agree, understand and confirm that the card/Banking details
               provided by you for availing of services on www.bookyourcv.com
               will be correct and accurate and you shall not use the credit
               card /banking details which is not lawfully owned by you. We
               do not store any of your password or confidential information
               related to your credit/debit card or bank details. You further
               agree and undertake to provide the correct and valid credit card
               details to Payment Gateway Service provider. Further the said
               information will be not be utilized and shared by us with any of
               the third parties unless required by law, regulation or court
               order.
            </div>

            <div style={{ paddingTop: "2rem" }}>TERM OF USE:</div>
            <div>
               You hereby agree and promise not to use the services for any
               purpose that is restricted /unlawful or prohibited by these terms
               of use, By way of example, and not as a limitation, you agree not
               to use the Services:
            </div>

            <div>TERM OF AGREEMENT/SERVICE:</div>
            <div>
               This Agreement shall remain in force so long as you are using our
               services. BookYourCv.com provides the online platform where users
               can select the services and place orders for services selected on
               the site subject to t&C set forth above and below. Either you or
               www.bookyourcv.com may terminate the service/services at any
               time, with or without cause. Bookyourcv.com reserves the right,
               in its sole discretion, to terminate your access to the website
               services and the related services or any portion thereof at any
               time, without any notice/notices to
               anybody/Individual/Corporate/Agent/Firm or any other legal
               entity.
            </div>
         </div>
      </div>
   );
}
