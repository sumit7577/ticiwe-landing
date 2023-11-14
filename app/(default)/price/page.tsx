"use client";

import { HeroIcon } from "@/components/ui/hero-icon";
import React, { useState } from "react"

const plans = ["monthly", "anually"] as const;

const Price = (): React.ReactNode => {
    return (
        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col lg:max-w-[28%] md:max-w-[45%] sm:max-w-[80%] hover:scale-110 hover:bg-main-100 transition ease-in-out duration-700 transform group shadow-xl">
            <div className="flex justify-between mb-4 items-center">
                <p className="font-extrabold text-lg group-hover:text-white font-sans">Basic</p>
                <p className="font-bold border-1 bg-gray-300 text-sm p-3 rounded-md group-hover:text-white group-hover:bg-violet-600 font-sans text-gray-600">Best Price</p>
            </div>
            <div className="flex flex-col gap-4 p-4">
                <p className="text-base font-normal text-gray-400 group-hover:text-white font-sans">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="font-extrabold text-black text-5xl group-hover:text-white">$99 <span className="text-xl text-gray-400 font-extrabold group-hover:text-white relative bottom-2 px-4">/monthly</span></p>
            </div>
            <div className="px-4">
                <h2 className="font-bold text-md mb-4 group-hover:text-white">What's included</h2>
                <ul className="flex item-center flex-col gap-4 mb-4">
                    <li className="flex gap-x-3 group-hover:text-white font-sans">
                        <HeroIcon iconName="CheckCircleIcon" />
                        All analytics features
                    </li>
                    <li className="flex gap-x-3 group-hover:text-white font-sans">
                        <HeroIcon iconName="CheckCircleIcon" />
                        Up to 250,000 tracked visits
                    </li>
                    <li className="flex gap-x-3 group-hover:text-white font-sans">
                        <HeroIcon iconName="CheckCircleIcon" />
                        Normal support
                    </li>
                    <li className="flex gap-x-3 group-hover:text-white font-sans">
                        <HeroIcon iconName="CheckCircleIcon" />
                        Up to 3 members
                    </li>
                </ul>
                <div className="flex items-center justify-items-center flex-col">
                    <button className="rounded-full p-4 bg-main-100 text-white font-bold text-sm font-sans px-14 group-hover:bg-white group-hover:text-main-100">Purchase</button>
                </div>

            </div>
        </div>
    )

}

export default function Pricing() {
    const [plan, setPlan] = useState<typeof plans[number]>("monthly");
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <div className="flex flex-col items-center justify-items-center mb-8">
                        <div className="flex bg-gray-50 rounded-full p-1">
                            <div onClick={(e) => { e.preventDefault(); setPlan(() => "monthly") }}
                                className={`text-base px-4 py-1.5 items-center flex rounded-full border transition duration-300 ease-in-out ${plan !== "monthly" ? 'bg-gray-200 border-transparent font-medium' : 'bg-main-100 text-white shadow-md hover:shadow-lg font-bold'}`}>
                                <div className="leading-snug tracking-tight mb-1">
                                    Monthly
                                </div>
                            </div>

                            <div onClick={(e) => { e.preventDefault(); setPlan(() => 'anually') }}
                                className={`text-base px-4 py-1.5 items-center flex rounded-full border transition duration-300 ease-in-out ${plan !== "anually" ? 'bg-gray-200 border-transparent font-medium' : 'bg-main-100 text-white shadow-md hover:shadow-lg font-bold'}`}>
                                <div className="leading-snug tracking-tight mb-1">
                                    Anually
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mb-14 text-center">
                        <p className="font-bold font-sans text-3xl">Our pricing plans</p>
                        <p className="font-base font-sans text-gray-600 text-lg">Before you purchase a subscription, you can try our free <span className="font-bold">7-day trail</span></p>
                    </div>
                    <div className="flex flex-wrap gap-10 w-full justify-between mb-12">
                        {Array.from("cha").map((item, index) => (
                            <Price key={index} />
                        ))}

                    </div>

                    {/*purchase modal */}
                    <div className="flex flex-col items-center">
                        <div className='bg-gray-50 rounded-full md:grid md:grid-cols-12 items-center p-4 px-8 shadow-xl gap-4'>
                            <div className='col-span-6 font-normal text-base font-sans text-gray-600'>
                                if you used an individual plan or want to choose one:
                            </div>
                            <div className='col-span-6 flex gap-2 items-center text-center'>
                                <div className='font-bold font-sans text-base border-r-2 border-gray-300 pr-1'>Restore purchases</div>
                                <div className='font-bold font-sans text-base border-gray-300'>Plans for individuals</div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}