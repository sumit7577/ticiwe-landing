import React from 'react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/connect/boy.png'
import HandBg from "@/public/images/connect/hand.png"
import Link from 'next/link'
import  { Prices } from '../price/page'



export default function Price() {
    return (
        <section className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Hero content */}

                <div className="pt-10 pb-12 md:pb-20 md:flex justify-center items-center">

                    {/* Section header */}
                    <div>
                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={400} height="462" alt="Header" />
                    </div>

                    <div className="text-black order-first">
                        <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">🔐 Data Protection</h1>
                        <div className="mx-auto">
                            <p className="text-md font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">Your privacy is our priority. We implement rigorous security measures to make your data inaccessible to prying eyes.
                                <p className='mt-5'>Welcome to a safe and protected environment where your privacy is secure.</p></p>
                        </div>
                        <Link href="/signup" className='bg-main-100 rounded-full p-4 px-10 w-[90%] text-center font-bold font-sans text-white'>Sign up</Link>
                    </div>

                </div>

                <div className="pt-10 pb-12 md:pb-20 md:flex justify-center items-center md:gap-20 md:px-40">

                    {/* Section header */}
                    <div>
                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={400} height="462" alt="Header" />
                    </div>

                    <div className="text-black order-first">
                        <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">🔐 Data Protection</h1>
                        <div className="mx-auto">
                            <p className="text-md font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">Your privacy is our priority. We implement rigorous security measures to make your data inaccessible to prying eyes.
                                <p className='mt-5'>Welcome to a safe and protected environment where your privacy is secure.</p></p>
                        </div>
                        <Link href="/signup" className='bg-main-100 rounded-full p-4 px-10 w-[90%] text-center font-bold font-sans text-white'>Sign up</Link>
                    </div>

                </div>

                <div className="pt-10 pb-12 md:pb-20 md:flex justify-center items-center md:gap-20 md:px-40">

                    {/* Section header */}
                    <div>
                        <Image className="md:max-w-none mx-auto rounded" src={HandBg} width={400} height="462" alt="Header" />
                    </div>

                    <div className="text-black">
                        <h1 className="text-3xl font-bold font-sans leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">⚖️ Specialized Legal Support 🤝</h1>
                        <div className="mx-auto">
                            <p className="text-md font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">By Your Side in Every Contract. Beyond technical support, we provide specialized legal assistance.
                                <p className='mt-5'>Our team of legal experts is ready to collaborate with your attorney, ensuring expert guidance during contract negotiations or renegotiation phases.</p>
                                <p className='mt-5'>We are here to make every step of the process more efficient and secure</p></p>
                        </div>
                        <Link href="/signup" className='bg-main-100 rounded-full p-4 px-10 w-[90%] text-center font-bold font-sans text-white'>Sign up</Link>
                    </div>

                </div>


                <div className="pt-20 pb-12 md:pb-20 md:flex justify-center items-center">

                    {/* Section header */}
                    <Prices />

                </div>


            </div>
        </section>
    )
}
