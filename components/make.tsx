'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/finalize.png'
import { HeroIcon } from './ui/hero-icon'


export default function Make() {
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


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="pt-12 md:pt-20">



          {/* Section header */}
          <div className="max-w-full flex items-center mx-auto pb-12 md:pb-16">
            <h1 className="h2 font-medium text-gray-300 text-base mr-5 font-sans">Finalize</h1>
            <span className="w-11/12 p-0.5 bg-gray-200"></span>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-0">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Finalize" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-6">
                <h3 className="h3 mb-2 font-black text-main-100 text-5xl font-sans">Make</h3>
                <p className="text-main-100 text-3xl font-light font-sans">Custom points of interest</p>
              </div>

              <div className="mb-8 md:mb-0">
                <p className='font-normal font-sans text-lg text-black mb-4'>
                  Unleash your creativity and make the map truly your own by adding custom points of interest.
                </p>
                <p className='font-normal font-sans text-lg text-black mb-4'>
                  Our platform allows you to import and manage your unique points with ease.
                </p>
                <p className='font-normal font-sans text-lg text-black'>
                  Use Excel or other data sources to bring your ideas to life and customize the map according to your specific needs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}
