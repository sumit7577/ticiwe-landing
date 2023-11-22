'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
    if(videoRef){
      if(videoRef.current?.paused){
        videoRef.current.play()
      }
    }
  }, [])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-full flex items-center mx-auto pb-12 md:pb-16">
            <h1 className="h2 font-medium text-gray-300 text-base mr-5 font-sans">How it works</h1>
            <span className="w-10/12 p-0.5 bg-gray-200"></span>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-6">
                <h3 className="h3 mb-2 font-black text-main-100 text-5xl font-sans">Explore</h3>
                <p className="text-main-100 text-2xl font-thin font-sans">Data on a Map</p>
              </div>

              <div className="mb-8 md:mb-0">
                <p className='font-medium font-sans text-lg text-black mb-8'>
                  Welcome to our data mapping tool, where you can bring your data to life. Upload an Excel file with your data, and in just a few steps, you'll see your data represented on an interactive map.
                </p>
                <p className="font-medium font-sans text-lg text-black">
                  Explore the data, track trends, and gain a geographic perspective on your information. Whether you have business data to analyze, points of interest to visualize, or any other mapping need, our tool will allow you to do so intuitively and engagingly.
                </p>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  <div className="relative inline-flex flex-col">
                    <video width={500} ref={videoRef} height={462} loop muted autoPlay>
                      <source src="/images/explore.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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