import React from 'react'
import Image from "next/image";
import FeaturesBg from '@/public/images/connect/hands.png'
import Girl from "@/public/images/connect/girl.png";
import Link from 'next/link';
import Chart from "@/public/images/connect/Charts.png";
import Frame from "@/public/images/connect/frame.png"


export default function Content() {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Hero content */}
                <div className="pt-10 pb-12 md:pt-40 md:pb-20 flex flex-col justify-center items-center md:gap-20 md:px-40">

                    {/* Section header */}
                    <div>
                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Header" />
                    </div>

                    <div className="pb-12 md:pb-16 text-black text-center">
                        <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">💪 Strength in Sharing 📊</h1>
                        <div className="mx-auto">
                            <p className="text-md font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">Access exclusive data reserved for mobile network operators. We are the primary source for up-to-date and in-depth information.</p>
                        </div>
                    </div>

                </div>

                <div className="pt-10 pb-12 md:pb-20 md:flex justify-center items-center md:gap-20 md:px-20">

                    {/* Section header */}
                    <div>
                        <Image className="md:max-w-none mx-auto rounded" src={Girl} width={400} height={400} alt="Header" />
                    </div>

                    <div className="pb-12 md:pb-16 text-black text-center order-first">
                        <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">🌱 Reciprocal Exchange 🔄</h1>
                        <div className="mx-auto">
                            <p className="text-md font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">By sharing, access information from others. A unique opportunity for collective growth.</p>
                        </div>
                    </div>

                </div>

                <div className="pt-10 pb-12 md:pb-20 md:gap-5 md:px-40 flex flex-col items-center justify-center">

                    {/* Section header */}
                    <div className='md:flex justify-center items-center'>
                        <div>
                            <Image className="md:max-w-none mx-auto rounded" src={Chart} width={400} height={400} alt="Header" />
                        </div>

                        <div className="text-black text-center">
                            <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">🔒 Maximum Confidentiality 🤐</h1>
                            <div className="mx-auto">
                                <p className="text-md font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">Your information is treated with the utmost security. We guarantee absolute confidentiality.</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/signup" className='bg-main-100 rounded-full p-4 px-10 w-[40%] text-center font-bold font-sans text-white'>Sign up</Link>

                </div>

                <div className="pt-10 md:pt-20 pb-12 md:pb-20 md:gap-20 md:px-40 flex flex-col items-center justify-center">

                    {/* Section header */}
                    <div className='flex flex-col justify-center items-center'>
                        <div>
                            <Image className="md:max-w-none mx-auto rounded" src={Frame} width={800} height={400} alt="Header" />
                        </div>

                        <div className="text-black text-center order-first md:px-40 pb-20">
                            <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The most important thing in negotiation is to know what isn’t said</h1>
                        </div>
                    </div>

                    <Link href="/signup" className='bg-main-100 rounded-full p-4 px-10 w-[40%] text-center font-bold font-sans text-white'>Sign up</Link>

                </div>

            </div>
        </section>
    )
}
