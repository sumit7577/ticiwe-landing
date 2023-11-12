export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Access from '@/components/access'
import Make from '@/components/make'
import Create from '@/components/create'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Access />
      <Create/>
      <Make/>
    </>
  )
}
