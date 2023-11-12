'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'


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

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">



          {/* Section header */}
          <div className="max-w-3xl flex justify-center align-middle mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4 text-sm">how it works</h1>

          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-0">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  <div className="relative inline-flex flex-col">
                    <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                    <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-6">
                <h3 className="h3 mb-2 font-black text-main-100 text-5xl">Make</h3>
                <p className="text-main-100 text-2xl font-light">Custom points of interest</p>
              </div>

              <div className="mb-8 md:mb-0">
                <p className='font-medium text-lg bg-clip-text text-transparent bg-black '>
                  Unleash your creativity and make the map truly your own by adding custom points of interest.
                  Our platform allows you to import and manage your unique points with ease.
                  Use Excel or other data sources to bring your ideas to life and customize the map according to your specific needs.
                </p>
              </div>
            </div>



          </div>

        </div>
      </div>
    </section>
  )
}