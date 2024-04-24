import React from "react"



export default function Whyus (){
    return (
        <div>
            <div className="h-[35rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            {/* <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            /> */}
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Terms & Conditions 
                    {/* / <br /> Privacy policy. */}
                    </h1>
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    Spotlight effect is a great way to draw attention to a specific part
                    of the page. Here, we are drawing the attention towards the text
                    section of the page. I don&apos;t know why but I&apos;m running out of
                    copy.
                    </p>
                </div>
            </div>
            <div className="mt-4 font-normal text-base text-neutral-300  mx-auto" style={{paddingLeft:"5rem", paddingRight:"5rem", position:"relative", bottom:"8rem"}}>        
                    <div style={{paddingTop:"2rem"}}>Terms & Conditions</div>
                    <div>USE OF DATA</div>
                    <div>The user hereby agrees and irrevocably authorizes us (Bookyourcv) to:</div>


                    <div>TERM OF AGREEMENT/SERVICE:</div>
                    <div>This Agreement shall remain in force so long as you are using our services. BookYourCv.com provides the online platform where users can select the services and place orders for services selected on the site subject to t&C set forth above and below. Either you or www.bookyourcv.com may terminate the service/services at any time, with or without cause. Bookyourcv.com reserves the right, in its sole discretion, to terminate your access to the website services and the related services or any portion thereof at any time, without any notice/notices to anybody/Individual/Corporate/Agent/Firm or any other legal entity.</div>
                </div>
        </div>
        
    )
}