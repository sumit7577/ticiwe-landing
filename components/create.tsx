'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'

export default function Create() {
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
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
                <h3 className="h3 mb-2 font-black text-main-100 text-5xl font-sans">Co-Create</h3>
                <p className="text-main-100 text-3xl font-light font-sans">In one space</p>
              </div>

              <div className="mb-8 md:mb-0">
                <p className='font-sans font-normal text-lg text-black mb-8'>
                  Whether you're a curious individual, a professional user, or part of a larger organization, <span className='font-bold'>Ticiwe</span> empowers you to harness the power of maps and unleash your creativity and vision.
                </p>
                <p className='font-sans font-normal text-lg text-black'>
                  Discover endless possibilities as you map your data, whether it's for research, planning, or simply for the love of exploration.
                </p>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/*purchase modal */}
          <div className='bg-gray-50 rounded-full md:grid md:grid-cols-12 items-center p-4 px-8'>
            <div className='col-span-3 font-normal text-base font-sans text-gray-600 text-center'>
              Check out our subscription plans
            </div>
            <div className='col-span-7 flex gap-3'>
              <div className='font-bold text-base border-r-2 border-gray-300 pr-1'>Basic</div>
              <div className='font-bold text-base border-r-2 border-gray-300 pr-1'>Pro</div>
              <div className='font-bold text-base '>Enterprise</div>
            </div>
            <div className='col-span-2 text-center gap-5'>
              <div className='rounded-full text-white font-bold bg-main-100 py-3 px-2 text-sm font-sans'><a href="/price">Explore Price</a></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
