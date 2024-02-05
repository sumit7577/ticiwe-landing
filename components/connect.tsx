'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/co-create.gif'
import Link from 'next/link'
import Connects from "@/public/images/connect/Connect.png"

export default function Connect() {
    const [tab, setTab] = useState<number>(1)
    const tabs = useRef<HTMLDivElement>(null)

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix()
    }, [])
    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mb-20">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-full flex items-center mx-auto pb-12 md:pb-16">
                        <h1 className="h2 font-medium font-sans text-gray-300 text-base mr-5 text-center">Share</h1>
                        <span className="w-11/12 p-0.5 bg-gray-200"></span>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">

                        {/* Content */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-6">
                                <h3 className="h3 mb-2 font-black text-main-100 text-5xl font-sans">Connect</h3>
                                <p className="text-main-100 text-3xl font-light font-sans">The Community of Ticiwe</p>
                            </div>

                            <div className="mb-8 md:mb-0">
                                <p className='font-sans font-normal text-lg text-black mb-10'>
                                    Together, we are not individual points on the map, but united, we form a network of shared resources. Discover what makes our community unique.
                                </p>
                                <Link href="/connect" className='p-3 rounded-full bg-main-100 text-md text-white font-medium font-sans max-w-[40%] text-center md:max-w-[25%]'>Register Now</Link>
                            </div>
                        </div>

                        {/* Tabs items */}
                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 order-first">
                            <div className="transition-all">
                                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                                    <div className="relative inline-flex flex-col">
                                        <Image className="md:max-w-none mx-auto rounded" src={Connects} width={500} height="462" alt="Connect" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
