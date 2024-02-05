import React from 'react'
import Image from "next/image";
import FeaturesBg from '@/public/images/connect/communication.png'

export default function Head() {
    return (
        <section className="relative">
            <div className="max-w-full mx-auto px-4 sm:px-6 bg-main-100">

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20 md:flex justify-between items-center md:gap-20 md:px-40">

                    {/* Section header */}
                    <div className="pb-12 md:pb-16 text-white">
                        <h1 className="text-xl font-medium leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Community</h1>
                        <div className="mx-auto">
                            <p className="text-4xl font-black mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">🌐 Together We Are Stronger, More Informed, and Ahead. 📡</p>
                            <p className="text-2xl font-extralight mb-8 light" data-aos="zoom-y-out" data-aos-delay="150">Join the first and only community dedicated to cellular site landlords.</p>
                            <div className="max-w-sm mx-auto sm:max-w-none" data-aos="zoom-y-out" data-aos-delay="300">
                                <a className="btn text-black bg-white w-full mb-4 sm:w-auto sm:mb-0 rounded-full font-bold" href="/signin">Sign Up</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Header" />
                    </div>

                </div>

            </div>
        </section>
    )
}
