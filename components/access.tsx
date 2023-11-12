'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'


export default function Access() {
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
            {/* tab items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-0">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={FeaturesBg} width={500} height="462" alt="Features bg" />
                      <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement} width={500} height="44" alt="Element" style={{ top: '30%' }} />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

            {/* content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">

              <div className="mb-8 md:mb-8 flex justify-between rounded-full bg-gray-200 md:max-w-sm max-h-14">
                <a
                  className={`flex items-center text-lg px-2.5 rounded-full border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-gray-200 border-transparent' : 'bg-white shadow-md border-gray-200 hover:shadow-lg'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Import</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded-full border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-gray-200 border-transparent' : 'bg-white shadow-md border-gray-200 hover:shadow-lg'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Produce</div>

                  </div>

                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded-full border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-gray-200 border-transparent' : 'bg-white shadow-md border-gray-200 hover:shadow-lg'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Finalize</div>
                  </div>

                </a>
              </div>

              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-6">
                {tab === 1 && <>
                  <h3 className="h3 font-extrabold text-violet-700 text-3xl mb-10">01</h3>
                  <p className="text-main-100 text-5xl font-black mb-10">Gain Access</p>
                  <p className="text-black text-md font-light mb-8">to comprehensive cadastral maps from various countries.</p>
                </>}

                {tab === 2 && <>
                  <h3 className="h3 font-extrabold text-violet-700 text-3xl mb-10">02</h3>
                  <p className="text-main-100 text-5xl font-black mb-10">Unlock Valuable</p>
                  <p className="text-black text-md font-light mb-8">information about land ownership, property boundaries, and</p>
                </>}

                {tab === 3 && <>
                  <h3 className="h3 font-extrabold text-violet-700 text-3xl mb-10">03</h3>
                  <p className="text-main-100 text-5xl font-black mb-10">Empower</p>
                  <p className="text-black text-md font-light mb-8">your business decisions with accurate and up-to-date data.</p>
                </>}

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
